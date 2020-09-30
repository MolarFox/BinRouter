/*
Author: Anthony Grainger
Date created: Aug-2020

ADAPTED FROM:
https://developers.google.com/optimization/routing/cvrp
Under the APACHE 2.0 license.
*/

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include "ortools/constraint_solver/routing.h"
#include "ortools/constraint_solver/routing_enums.pb.h"
#include "ortools/constraint_solver/routing_index_manager.h"
#include "ortools/constraint_solver/routing_parameters.h"

#include <chrono>

using namespace std;

namespace operations_research {
	struct DataModel {
		std::vector<std::vector<int64>> distance_matrix{};
		std::vector<int64> demands{};
		std::vector<int64> vehicle_capacities{};
		int num_vehicles = 0;
		RoutingIndexManager::NodeIndex depot{ 0 };
	};
	

	// Gets the necessary parameters for the routing from the std
	void readInput(DataModel* _data, int* _metaheuristic) {
		// READ ORDER: distance matrix, demands, vehicle capacities, metaheuristic type (int)

		const int NUM_OF_INPUTS = 4;	// Number of parameters that this function will read from system input

		// Declare input
		string input[NUM_OF_INPUTS];

		// Read inputs into input array
		for (int i = 0; i < NUM_OF_INPUTS; i++) {
			cin >> input[i];
		}

		// parse distance matrix
		vector<int64> tempVec = {};
		string tempStr = "";
		for (char ch : input[0])
		{
			// Number is finished being parsed. Add it to vector.
			if (ch == ',') {
				tempVec.push_back(stol(tempStr));
				tempStr = "";
			}
			// Row of distance matrix is finished being parsed
			else if (ch == '|') {
				tempVec.push_back(stol(tempStr));
				_data->distance_matrix.push_back(tempVec);
				tempVec.clear();
				tempStr = "";
			}
			else {
				tempStr += ch;
			}
		}
		tempVec.push_back(stol(tempStr));
		_data->distance_matrix.push_back(tempVec);

		// parse demands
		tempVec.clear();
		tempStr = "";
		for (char ch : input[1])
		{
			// Number is finished being parsed. Add it to vector.
			if (ch == ',') {
				tempVec.push_back(stol(tempStr));
				tempStr = "";
			}
			// Row of distance matrix is finished being parsed
			else {
				tempStr += ch;
			}
		}
		tempVec.push_back(stol(tempStr));
		_data->demands = tempVec;

		// parse vehicle capacities
		tempVec.clear();
		tempStr = "";
		for (char ch : input[2])
		{
			// Number is finished being parsed. Add it to vector.
			if (ch == ',') {
				tempVec.push_back(stol(tempStr));
				tempStr = "";
			}
			// Row of distance matrix is finished being parsed
			else {
				tempStr += ch;
			}
		}
		tempVec.push_back(stol(tempStr));
		_data->vehicle_capacities = tempVec;

		// parse vehicle number
		_data->num_vehicles = (int) _data->vehicle_capacities.size();

		// parse metaheuristic
		(*_metaheuristic) = stoi(input[3]);
	}

	void OutputSolution(const DataModel& data, const RoutingIndexManager& manager,
		const RoutingModel& routing, const Assignment& solution) {
		// Outputs the solution

		int64 total_distance{ 0 };
		int64 total_load{ 0 };
		for (int vehicle_id = 0; vehicle_id < data.num_vehicles; ++vehicle_id) {
			int64 index = routing.Start(vehicle_id);
			int64 route_distance{ 0 };
			int64 route_load{ 0 };
			std::stringstream route;
			while (routing.IsEnd(index) == false) {
				int64 node_index = manager.IndexToNode(index).value();
				route_load += data.demands[node_index];
				route << node_index << ",";		// Adding node to route
				int64 previous_index = index;
				index = solution.Value(routing.NextVar(index));
				route_distance += routing.GetArcCostForVehicle(previous_index, index,
					int64{ vehicle_id });
			}
			std::cout << route.str() << manager.IndexToNode(index).value() << endl;	// Output route
			total_distance += route_distance;
			total_load += route_load;
		}
	}

	void VrpCapacity(DataModel data, int metaheuristic = -1) {
		// testing consistency of input

		// TODO: remove after testing
		auto start = std::chrono::high_resolution_clock::now();

		bool validInput = true;
		if (data.num_vehicles != data.vehicle_capacities.size() || data.distance_matrix.size() != data.demands.size()) {
			validInput = false;
		}


		// Create Routing Index Manager
		RoutingIndexManager manager(data.distance_matrix.size(), data.num_vehicles,
			data.depot);

		// Create Routing Model.
		RoutingModel routing(manager);

		// Create and register a transit callback.
		const int transit_callback_index = routing.RegisterTransitCallback(
			[&data, &manager](int64 from_index, int64 to_index) -> int64 {
				// Convert from routing variable Index to distance matrix NodeIndex.
				int from_node = manager.IndexToNode(from_index).value();
				int to_node = manager.IndexToNode(to_index).value();
				return data.distance_matrix[from_node][to_node];
			});

		// Define cost of each arc.
		routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index);

		// Add Capacity constraint.
		const int demand_callback_index = routing.RegisterUnaryTransitCallback(
			[&data, &manager](int64 from_index) -> int64 {
				// Convert from routing variable Index to demand NodeIndex.
				int from_node = manager.IndexToNode(from_index).value();
				return data.demands[from_node];
			});
		routing.AddDimensionWithVehicleCapacity(
			demand_callback_index,    // transit callback index
			int64{ 0 },                 // null capacity slack
			data.vehicle_capacities,  // vehicle maximum capacities
			true,                     // start cumul to zero
			"Capacity");

		// Setting first solution heuristic.
		RoutingSearchParameters searchParameters = DefaultRoutingSearchParameters();
		searchParameters.set_first_solution_strategy(
			FirstSolutionStrategy::PATH_CHEAPEST_ARC);

		// Setting metaheuristic
		// 0 = Greedy descent, 1 = guided local search, 2 = simulated annealing, 3 = tabu search
		switch (metaheuristic) {
		case 0:
			searchParameters.set_local_search_metaheuristic(
				LocalSearchMetaheuristic::GREEDY_DESCENT);
		case 1:
			searchParameters.set_local_search_metaheuristic(
				LocalSearchMetaheuristic::GUIDED_LOCAL_SEARCH);
		case 2:
			searchParameters.set_local_search_metaheuristic(
				LocalSearchMetaheuristic::SIMULATED_ANNEALING);
		case 3:
			searchParameters.set_local_search_metaheuristic(
				LocalSearchMetaheuristic::TABU_SEARCH);
		default:
			searchParameters.set_local_search_metaheuristic(
				LocalSearchMetaheuristic::AUTOMATIC);
		}
		searchParameters.mutable_time_limit()->set_seconds(20);

		// Solve the problem.
		const Assignment* solution = routing.SolveWithParameters(searchParameters);

		// TODO: remove after testing
		auto finish = std::chrono::high_resolution_clock::now();
		//cout << "Time taken: " << std::chrono::duration_cast<std::chrono::microseconds>(finish - start).count() << endl;

		// Print solution on console.
		OutputSolution(data, manager, routing, *solution);
	}


	
}


int main(int argc, char** argv) {
	operations_research::DataModel data;
	int metaheuristic = -1;

	
	operations_research::readInput(&data, &metaheuristic);
	operations_research::VrpCapacity(data, metaheuristic);
	return EXIT_SUCCESS;
}
