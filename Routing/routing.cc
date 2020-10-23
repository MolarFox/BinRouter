 /*
 routing.cc
Author: Anthony Grainger
Date created: Aug-2020

ADAPTED FROM:
https://developers.google.com/optimization/routing/cvrp
Under the APACHE 2.0 license.

This file is responsible for taking generating a route for every vehicle, so that all waste gets collected.
It is given several command line arguments which describe the scenario (distance matrix for bins, number of vehicles,
capacity of vehicles etc.) and outputs a result using standard output.
*/

#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
#include "ortools/constraint_solver/routing.h"
#include "ortools/constraint_solver/routing_enums.pb.h"
#include "ortools/constraint_solver/routing_index_manager.h"
#include "ortools/constraint_solver/routing_parameters.h"
#include <stdlib.h>

#include <chrono>

using namespace std;

namespace operations_research {

	// This is how the routing scenario data is contained
	struct DataModel {
		std::vector<std::vector<int64>> distanceMatrix{};
		std::vector<int64> demands{};
		std::vector<int64> vehicleCapacities{};
		int numVehicles = 0;
		RoutingIndexManager::NodeIndex depot{ 0 };
	};

	/*
	Parses the input from the command line arguments. These arguments represent the routing scenario, including
	details such as a distance matrix, amount of rubbish at each node, vehicle capacities, and the metaheuristic that should be used.
	These parsed inputs are then stored, and expected to be given to VrpCapacity function.
	
	INPUTS
	argc: Number of command line arguments; Used to check if the correct number of parameters have been given
	argv: The parameters, as character arrays
	_data: The DataModel object that the parsed inputs should be stored in.
	_metaheuristic: An integer representing a metaheuristic for the routing algorithm

	OUTPUT
	A Boolean value representing whether the reading of inputs was successful
	*/
	bool ReadInput(int argc, char *argv[], DataModel* _data, int* _metaheuristic) {
		// READ ORDER: distance matrix, demands, vehicle capacities, metaheuristic type (int)

		const int NUM_OF_INPUTS = 4;	// Number of parameters that this function is expected to be given

		// Checking if number of arguments is correct
		if (argc != (NUM_OF_INPUTS + 1)) {
			// invalid input
			cout << "Invalid number of inputs" << endl;
			return false;
		}

		// parse distance matrix
		vector<int64> tempVec = {};
		string tempStr = "";
		char ch;
		for (int i = 0; i < strlen(argv[1]); i++)
		{
			ch = argv[1][i];
			// Number is finished being parsed. Add it to vector.
			if (ch == ',') {
				tempVec.push_back(stol(tempStr));
				tempStr = "";
			}
			// Row of distance matrix is finished being parsed
			else if (ch == '#') {
				tempVec.push_back(stol(tempStr));
				_data->distanceMatrix.push_back(tempVec);
				tempVec.clear();
				tempStr = "";
			}
			else {
				tempStr += ch;
			}
		}
		tempVec.push_back(stol(tempStr));
		_data->distanceMatrix.push_back(tempVec);

		// parse demands
		tempVec.clear();
		tempStr = "";
		for (int i = 0; i < strlen(argv[2]); i++)
		{
			ch = argv[2][i];
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
		for (int i = 0; i < strlen(argv[3]); i++)
		{
			ch = argv[3][i];
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
		_data->vehicleCapacities = tempVec;

		// parse vehicle number
		_data->numVehicles = (int) _data->vehicleCapacities.size();

		// parse metaheuristic
		(*_metaheuristic) = stoi(argv[4]);
		return true;
	}


	/*
	OutputSolution is given a solution to a routing problem. From this we derive the list of nodes that each vehicle
	travels to in this solution, and then these routes are printed using cout. If there is no solution, "-1" is outputted
	for each vehicle in the routing problem.

	INPUTS
	data: Contains all of the information for the routing problem
	manager: Used with 'data' in order to retrieve the indicies for specific nodes. Required by Google OR-Tools
	routing: RoutingModel that contains information regarding the specifics of how the routing is performed. Eg. The existance
	of capacity
	solution: This is how the solution to the routing problem is stored. This contains all of the generated routes.
	*/
	void OutputSolution(const DataModel& data, const RoutingIndexManager& manager,
		const RoutingModel& routing, const Assignment& solution) {
		// Outputs the solution

		if (routing.status() != 1)
		{
			// No solution found. Print "-1" for each vehicle
			for (int i = 0; i < data.numVehicles; i++) {
				cout << "-1" << endl;
			}
			return;
		}
		else {
			int64 totalDistance{ 0 };
			int64 totalLoad{ 0 };
			for (int vehicleID = 0; vehicleID < data.numVehicles; ++vehicleID) {
				int64 index = routing.Start(vehicleID);
				int64 routeDistance{ 0 };
				int64 routeLoad{ 0 };
				std::stringstream route;
				while (routing.IsEnd(index) == false) {
					int64 nodeIndex = manager.IndexToNode(index).value();
					routeLoad += data.demands[nodeIndex];
					route << nodeIndex << ",";		// Adding node to route
					int64 previous_index = index;
					index = solution.Value(routing.NextVar(index));
					routeDistance += routing.GetArcCostForVehicle(previous_index, index,
						int64{ vehicleID });
				}
				std::cout << route.str() << manager.IndexToNode(index).value() << endl;	// Output route
				totalDistance += routeDistance;
				totalLoad += routeLoad;
			}
		}
	}

	/*
	This is responsible for generating the routes for all vehicles, given the state of the routing problem that has
	previously been defined. These routes are then given directly to the OutputSolution function.
	
	INPUTS
	data: Holds all of the details of the routing problem (distance matrix, vehicle capacity etc.)
	metaheuristic: The index of the metaheuristic that has been chosen for the routing algorithm
	*/
	void VrpCapacity(DataModel data, int metaheuristic = -1) {

		// TODO: remove after testing
		auto start = std::chrono::high_resolution_clock::now();

		bool validInput = true;
		if (data.numVehicles != data.vehicleCapacities.size() || data.distanceMatrix.size() != data.demands.size()) {
			validInput = false;
		}

		// Create Routing Index Manager
		RoutingIndexManager manager(data.distanceMatrix.size(), data.numVehicles,
			data.depot);

		// Create Routing Model.
		RoutingModel routing(manager);

		// Create and register a transit callback.
		const int transit_callback_index = routing.RegisterTransitCallback(
			[&data, &manager](int64 from_index, int64 to_index) -> int64 {
				// Convert from routing variable Index to distance matrix NodeIndex.
				int from_node = manager.IndexToNode(from_index).value();
				int to_node = manager.IndexToNode(to_index).value();
				return data.distanceMatrix[from_node][to_node];
			});

		// Define cost of each arc.
		routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index);

		// Add Capacity constraint.
		const int demand_callback_index = routing.RegisterUnaryTransitCallback(
			[&data, &manager](int64 from_index) -> int64 {
				// Convert from routing variable Index to demand NodeIndex.
				int fromNode = manager.IndexToNode(from_index).value();
				return data.demands[fromNode];
			});
		routing.AddDimensionWithVehicleCapacity(
			demand_callback_index,    // transit callback index
			int64{ 0 },                 // null capacity slack
			data.vehicleCapacities,  // vehicle maximum capacities
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
		searchParameters.mutable_time_limit()->set_seconds(3600);

		// Solve the problem.
		const Assignment* solution = routing.SolveWithParameters(searchParameters);

		// TODO: remove after testing
		auto finish = std::chrono::high_resolution_clock::now();
		//cout << "Time taken: " << std::chrono::duration_cast<std::chrono::seconds>(finish - start).count() << endl;

		// Print solution on console.
		OutputSolution(data, manager, routing, *solution);
	}

	/*
	RandParams Generates random parameters, when given a number of nodes (bins), and number of vehicles.
	Used for testing only.

	INPUTS
	data: This is where the parameters for the routing problem are stored after they are generated
	n: Number of nodes (bins), as an integer
	v: Number of vehicles, as an integer
	*/
	void RandParams(DataModel& data, int n, int v) {
		// Generates random parameters when given number of nodes (n), and number of vehicles (v)
		std::default_random_engine generator;
		std::uniform_int_distribution<int> distribution(0, 1000);
		std::uniform_int_distribution<int> distribution2(0, 10);

		vector<int64> line = {};
		for (int i = 0; i < n; i++) {
			line.clear();
			for (int j = 0; j < n; j++) {
				if (i == j) {
					line.push_back(0);
				}
				else {
					line.push_back(distribution(generator));
				}
			}
			data.distanceMatrix.push_back(line);
		}

		for (int i = 0; i < n; i++) {
			data.demands.push_back(distribution2(generator));
		}

		for (int i = 0; i < v; i++) {
			data.vehicleCapacities.push_back((int)(8 * n) / v);
		}

		data.numVehicles = v;
	}

	/*
	PrintParams will print all of the parameters that are stored within a given DataModel.
	Used for testing only

	INPUTS
	data: Holds the parameters that will be printed
	metaheuristic: This is another parameter of the routing problem, which will also be printed
	*/
	void PrintParams(DataModel& data, int metaheuristic) {
		// Print distance matrix
		std::cout << "distanceMatrix = {";
		std:stringstream output;
		for (auto row : data.distanceMatrix) {
			output << "{";
			for (auto dist : row) {
				output << dist << ", ";
			}
			std::cout << output.str().substr(0, output.str().length() - 2) << "}";
			output.str("");
			output << ", ";
		}
		std::cout << output.str().substr(0, output.str().length() - 2) << "}" << endl;

		// Print demands (amount of rubbish)
		output.str("");
		output << "demands = {";
		for (auto demand : data.demands) {
			output << demand << ", ";
		}
		std::cout << output.str().substr(0, output.str().length() - 2) << "}" << endl;
		
		// Print vehicle capacities
		output.str("");
		output << "vehicleCapacities = {";
		for (auto capacity : data.vehicleCapacities) {
			output << capacity << ", ";
		}
		std::cout << output.str().substr(0, output.str().length() - 2) << "}" << endl;

		// print Number of vehicles, and index for metaheuristic
		std::cout << "numVehicles = " << data.numVehicles << endl;
		std::cout << "metaheuristic = " << metaheuristic << endl;
	}
}


int main(int argc, char* argv[]) {
	operations_research::DataModel data;
	int metaheuristic = -1;
	
	// Get the parameters and given them to VrpCapacity in order to be solved
	if (operations_research::ReadInput(argc, argv, &data, &metaheuristic)) {
		operations_research::VrpCapacity(data, metaheuristic);
	}
	return EXIT_SUCCESS;
}
