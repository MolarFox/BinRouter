(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-routes/view-routes.component */
      "./src/app/view-routes/view-routes.component.ts");
      /* harmony import */


      var _view_heatmap_view_heatmap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-heatmap/view-heatmap.component */
      "./src/app/view-heatmap/view-heatmap.component.ts");
      /* harmony import */


      var _view_bins_view_bins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-bins/view-bins.component */
      "./src/app/view-bins/view-bins.component.ts");
      /* harmony import */


      var _view_fleet_view_fleet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-fleet/view-fleet.component */
      "./src/app/view-fleet/view-fleet.component.ts");
      /**
       * Routing file
       *
       * All routes as well as their associated paths and titles are defined here.
       * Actual routing (event listening) occurs in root app component file.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var appTitle = "BinRouter"; // All possible routes in the app are defined here

      var routes = [{
        path: '',
        redirectTo: '/routes',
        pathMatch: 'full'
      }, {
        path: 'routes',
        component: _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_2__["ViewRoutesComponent"],
        data: {
          title: appTitle + " - Routes"
        }
      }, {
        path: 'heatmap',
        component: _view_heatmap_view_heatmap_component__WEBPACK_IMPORTED_MODULE_3__["ViewHeatmapComponent"],
        data: {
          title: appTitle + " - Heatmap"
        }
      }, {
        path: 'bins',
        component: _view_bins_view_bins_component__WEBPACK_IMPORTED_MODULE_4__["ViewBinsComponent"],
        data: {
          title: appTitle + " - Bins"
        }
      }, {
        path: 'fleet',
        component: _view_fleet_view_fleet_component__WEBPACK_IMPORTED_MODULE_5__["ViewFleetComponent"],
        data: {
          title: appTitle + " - Fleet"
        }
      }]; // The whole module has a higher precedence due to the job it performs, loads in on main app view

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mainmenu/mainmenu.component */
      "./src/app/mainmenu/mainmenu.component.ts");
      /**
       * This is the component ts file for the root view / module.
       * It's only direct job is to watch for, and act on any routing events
       * that are raised. Actual routes are defined in the app-routing module .ts file.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var AppComponent = /*#__PURE__*/function () {
        // Need router, titleservice, and some way to track active route
        function AppComponent(router, activeRoute, titleService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.activeRoute = activeRoute;
          this.titleService = titleService;
        } // Subscribe to router nav events


        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function () {
              console.log("Navigated to route ".concat(_this.activeRoute, " at time ").concat(new Date()));

              var crt = _this.getChild(_this.activeRoute);

              crt.data.subscribe(function (data) {
                _this.titleService.setTitle(data.title);
              });
            });
          } // Helper function to get active route at a given time

        }, {
          key: "getChild",
          value: function getChild(activeRouteLocal) {
            /**
             * Gets the active route (eg: in terms of app routing) at a given time
             * @param {ActivatedRoute} activeRouteLocal the active route
             * @return {ActivatedRoute} the child of the active route
             */
            if (activeRouteLocal.firstChild) {
              return this.getChild(activeRouteLocal.firstChild);
            } else {
              return activeRouteLocal;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mainmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_4__["MainmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["h1[_ngcontent-%COMP%] {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    color: #444;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody[_ngcontent-%COMP%] {\n    margin: 2em;\n  }\nbody[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    color: #333;\n    font-family: Cambria, Georgia;\n    \n  }\nagm-map[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n\n*[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6QyxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCOztFQUUvQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UseUNBQXlDO0VBQzNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xuaDEge1xuICAgIGNvbG9yOiAjMzY5O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgfVxuICBoMiwgaDMge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMmVtO1xuICB9XG5cbiAgYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG4gICAgXG4gIH1cblxuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLyogZXZlcnl3aGVyZSBlbHNlICovXG4gICoge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _gmaps_apikey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gmaps_apikey */
      "./src/app/gmaps_apikey.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var agm_direction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! agm-direction */
      "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");
      /* harmony import */


      var _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @agm/markerclusterer */
      "./node_modules/@agm/markerclusterer/__ivy_ngcc__/fesm2015/agm-markerclusterer.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mainmenu/mainmenu.component */
      "./src/app/mainmenu/mainmenu.component.ts");
      /* harmony import */


      var _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./view-routes/view-routes.component */
      "./src/app/view-routes/view-routes.component.ts");
      /* harmony import */


      var _view_heatmap_view_heatmap_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./view-heatmap/view-heatmap.component */
      "./src/app/view-heatmap/view-heatmap.component.ts");
      /* harmony import */


      var _view_bins_view_bins_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./view-bins/view-bins.component */
      "./src/app/view-bins/view-bins.component.ts");
      /* harmony import */


      var _view_fleet_view_fleet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./view-fleet/view-fleet.component */
      "./src/app/view-fleet/view-fleet.component.ts");
      /**
       * Primary module file - this file is where all imports, declarations, etc. occur.
       *
       * Note that majority of imports are just material design imports, there seems to be many
       * since each matdes element has its own module.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], agm_direction__WEBPACK_IMPORTED_MODULE_23__["AgmDirectionModule"], _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({
          apiKey: _gmaps_apikey__WEBPACK_IMPORTED_MODULE_5__["GMAPS_API_KEY"],
          libraries: ['visualization'] // Required for heatmap rendering

        }), _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_24__["AgmMarkerClustererModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"], _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_27__["MainmenuComponent"], _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_28__["ViewRoutesComponent"], _view_heatmap_view_heatmap_component__WEBPACK_IMPORTED_MODULE_29__["ViewHeatmapComponent"], _view_bins_view_bins_component__WEBPACK_IMPORTED_MODULE_30__["ViewBinsComponent"], _view_fleet_view_fleet_component__WEBPACK_IMPORTED_MODULE_31__["ViewFleetComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], agm_direction__WEBPACK_IMPORTED_MODULE_23__["AgmDirectionModule"], _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"], _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_24__["AgmMarkerClustererModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"], _mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_27__["MainmenuComponent"], _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_28__["ViewRoutesComponent"], _view_heatmap_view_heatmap_component__WEBPACK_IMPORTED_MODULE_29__["ViewHeatmapComponent"], _view_bins_view_bins_component__WEBPACK_IMPORTED_MODULE_30__["ViewBinsComponent"], _view_fleet_view_fleet_component__WEBPACK_IMPORTED_MODULE_31__["ViewFleetComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], agm_direction__WEBPACK_IMPORTED_MODULE_23__["AgmDirectionModule"], _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({
              apiKey: _gmaps_apikey__WEBPACK_IMPORTED_MODULE_5__["GMAPS_API_KEY"],
              libraries: ['visualization'] // Required for heatmap rendering

            }), _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_24__["AgmMarkerClustererModule"]],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/bin.ts":
    /*!************************!*\
      !*** ./src/app/bin.ts ***!
      \************************/

    /*! exports provided: jsonToBins, binsToJson */

    /***/
    function srcAppBinTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jsonToBins", function () {
        return jsonToBins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "binsToJson", function () {
        return binsToJson;
      });
      /**
       * Bin interfaces definition file
       *
       * Internal processes in frontend expect the regular Bin type, though
       * due to frequent updates and uncertainty in the type of response the backend
       * may send, it may be necessary to maintain a separate interface for the actual response
       * format and conversion functions to go between the two formats.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Converts binraw to bin, for use in translating received data from backend


      function jsonToBins(res) {
        /**
         * Converts raw json response from backend to format used by frontend
         * @param {BinRaw[]} res array of bin response from backend
         * @return {Bin[]} the raw array with each element converted to frontend format
         */
        var outarray = [];

        for (var i = 0; i < res.length; i++) {
          var record = res[i];
          outarray.push({
            "serial": record._id,
            "smartSerial": record.serialNumber,
            "lat": record.latitude,
            "lng": record.longitude,
            "address": record.address,
            "capacity": record.capacity,
            "is_smart": record.isSmart,
            "threshold": record.threshold,
            "fullness": record.currentFullness
          });
        }

        return outarray;
      } // Converts from bin to binout, for use in translating user edits to puts req format


      function binsToJson(bins) {
        /**
         * Converts frontend bin format ot partial backend format (specialised response type is expected)
         * @param {Bin[]} bins array of bins to be converted
         * @return {BinOut[]} input array converted to the format expected to be received at the backend
         */
        var outarray = [];

        for (var i = 0; i < bins.length; i++) {
          var record = bins[i];
          outarray.push({
            "_id": record.serial,
            "latitude": Number(record.lat),
            "longitude": Number(record.lng),
            "address": record.address,
            "capacity": record.capacity
          });
        }

        return outarray;
      }
      /***/

    },

    /***/
    "./src/app/binfetcher.service.ts":
    /*!***************************************!*\
      !*** ./src/app/binfetcher.service.ts ***!
      \***************************************/

    /*! exports provided: BinfetcherService */

    /***/
    function srcAppBinfetcherServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BinfetcherService", function () {
        return BinfetcherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _bin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bin */
      "./src/app/bin.ts");
      /* harmony import */


      var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mock-data */
      "./src/app/mock-data.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _httpHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./httpHelpers */
      "./src/app/httpHelpers.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /**
       * Service that performs fetching and posting of bin data
       *
       * Methods must be adapted to changes in the interface specification.
       * Note that the method to request individual bins is now outdated below.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var BinfetcherService = /*#__PURE__*/function () {
        function BinfetcherService(http) {
          _classCallCheck(this, BinfetcherService);

          this.http = http; // Use appropriate url based on environment variable

          this.binsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 0 ? 'data/bins' : 'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/bins1.json'; // fetchermode 1 will HTTP fetch from Github raw - see https://github.com/MolarFox/BinRouter_JSONTest*
          // Rudimentary cache

          this.bincache = undefined; // TODO: implement caching functionality
        }
        /*
        private httpReqBins(): void {
          this.binscache = this.http.get<Bin[]>(this.binsUrl).pipe(
            catchError(this.handleError<Bin[]>('httpReqBins', []))
          )
        }
        */
        // Fetches all bins and returns as observable


        _createClass(BinfetcherService, [{
          key: "getAllBins",
          value: function getAllBins() {
            /**
             * Gets all bin data, sourced from method specified in environment variables
             * @return {Observable<Bin[]>} Observable which resolves to the return data
             */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 2) {
              // fetch from static array
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["DUMMY_BINS"]);
            } else {
              // HTTP fetch
              if (this.bincache === undefined) {// not yet fetched, fetch it
              } // return of(this.binscache);


              return this.http.get(this.binsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
                console.log("Bins received:");
                console.log(x);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                return Object(_bin__WEBPACK_IMPORTED_MODULE_2__["jsonToBins"])(x.bins);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_6__["handleError"])('getAllBins', [])));
            }
          } // Submits any changes to the server and responds with the response

        }, {
          key: "submitChanges",
          value: function submitChanges(newchg, modchg, delchg) {
            /**
             * Submits edits to the server - server will notify of any validation errors through response
             * @param newchg  Array of new bin records
             * @param modchg  Array of modified, existing bin records
             * @param delchg  Array of deleted bin records
             * @return {Observable<any>} Observable containing server response of any failed validation checks
             */
            var output = {
              "dumbBinsDelete": delchg,
              "dumbBinsCreate": Object(_bin__WEBPACK_IMPORTED_MODULE_2__["binsToJson"])(newchg),
              "dumbBinsUpdate": Object(_bin__WEBPACK_IMPORTED_MODULE_2__["binsToJson"])(modchg)
            };
            output.dumbBinsCreate.forEach(function (x) {
              return delete x._id;
            }); // id undefined - irrelevant to backend

            console.log("Bin edits sent:");
            console.log(output); // log for debug purposes

            return this.http.put(this.binsUrl, output);
          }
        }]);

        return BinfetcherService;
      }();

      BinfetcherService.ɵfac = function BinfetcherService_Factory(t) {
        return new (t || BinfetcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
      };

      BinfetcherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BinfetcherService,
        factory: BinfetcherService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BinfetcherService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/depot.ts":
    /*!**************************!*\
      !*** ./src/app/depot.ts ***!
      \**************************/

    /*! exports provided: jsonToDepots */

    /***/
    function srcAppDepotTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jsonToDepots", function () {
        return jsonToDepots;
      });
      /**
       * Depot interfaces definition file
       *
       * Since the backend sometimes sends depot info along with other requests (eg: routing, fleet),
       * those interface definition files may need to import from this one.
       *
       * Internal processes in frontend expect the regular Depot type, though
       * due to frequent updates and uncertainty in the type of response the backend
       * may send, it may be necessary to maintain a separate interface for the actual response
       * format and conversion functions to go between the two formats.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Convert depotraw to depot (backend format to frontend format)


      function jsonToDepots(res) {
        /**
         * Converts raw json response from backend to format used by frontend
         * @param {DepotRaw[]} res array of depot response from backend
         * @return {Depot[]} the raw array with each element converted to frontend format
         */
        var outarray = [];

        for (var i = 0; i < res.length; i++) {
          var record = res[i];
          outarray.push({
            "id": record._id,
            "lat": record.latitude,
            "lng": record.longitude,
            "address": record.address
          });
        }

        return outarray;
      }
      /***/

    },

    /***/
    "./src/app/fleetfetcher.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/fleetfetcher.service.ts ***!
      \*****************************************/

    /*! exports provided: FleetfetcherService */

    /***/
    function srcAppFleetfetcherServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FleetfetcherService", function () {
        return FleetfetcherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _depot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./depot */
      "./src/app/depot.ts");
      /* harmony import */


      var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mock-data */
      "./src/app/mock-data.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _httpHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./httpHelpers */
      "./src/app/httpHelpers.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /**
       * Service that performs fetching and posting of vehicle data
       *
       * Methods must be adapted to changes in the interface specification.
       * Note that the method to request individual vehicles is now outdated below.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Service to handle fetching of fleet data, and posting of any changes made with editor


      var FleetfetcherService = /*#__PURE__*/function () {
        function FleetfetcherService(http) {
          _classCallCheck(this, FleetfetcherService);

          this.http = http; // Use appropriate url based on environment variable

          this.fleetUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes == 0 ? 'data/vehicles' : 'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/vehicles1.json'; // fetchermode 1 will HTTP fetch from Github raw - see https://github.com/MolarFox/BinRouter_JSONTest*
          // Rudimentary caches

          this.depotcache = undefined; // TODO: implement caching functionality

          this.fleetcache = undefined; // TODO: implement caching functionality
        } // Fetches all depots


        _createClass(FleetfetcherService, [{
          key: "getAllDepots",
          value: function getAllDepots() {
            /**
             * Gets all depot data, sourced from method specified in environment variables
             * @return {Observable<Depot[]>} Observable which resolves to the return data
             */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 2) {
              // fetch from static array
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["DUMMY_DEPOTS"]);
            } else {
              // HTTP fetch
              if (this.depotcache === undefined) {// not yet fetched, fetch it
              }

              return this.http.get(this.fleetUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
                console.log("Depots received:");
                console.log(x);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                return Object(_depot__WEBPACK_IMPORTED_MODULE_2__["jsonToDepots"])(x.depots);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_6__["handleError"])('getAllDepots', [])));
            }
          } // Fetches an individual depot, minimising network traffic
          // Depreciated method - backend modified, no longer works

        }, {
          key: "getDepot",
          value: function getDepot(id) {
            /**
             * [Depreciated] Gets the specified depot only
             * @param {string} id id of the depot to retrieve
             * @return {Observable<Depot>} Observable which resolves to the specified depot
             */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 2) {
              // fetch from static array
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["DUMMY_DEPOTS"].find(function (chk_depot) {
                return chk_depot.id === id;
              }));
            } else {
              // HTTP fetch
              if (this.depotcache === undefined) {// not yet fetched, fetch it
              } //return of(this.depotcache.find(chk_depot => chk_depot.id === id));
              // TODO: FIX WITH YI-SONG NEW IMPLEMENTATION (AAAAA??)


              return this.http.get("".concat(this.fleetUrl, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
                console.log("Depot received:");
                console.log(x);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_6__["handleError"])("getDepot id=".concat(id))));
            }
          } // Fetches all vehicles in the fleet

        }, {
          key: "getAllFleet",
          value: function getAllFleet() {
            /**
             * Gets all fleet data, sourced from method specified in environment variables
             * @return {Observable<Vehicle[]>} Observable which resolves to the return data
             */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 2) {
              // fetch from static array
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["DUMMY_VEHICLES"]);
            } else {
              // HTTP fetch
              if (this.fleetcache === undefined) {// not yet fetched, fetch it
              }

              return this.http.get(this.fleetUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
                console.log("Vehicles received:");
                console.log(x);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
                return x.fleetVehicles;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_6__["handleError"])('getAllFleet', [])));
            }
          } // Fetches individual vehicle from fleet database
          // As above, this method is now depreciated

        }, {
          key: "getVehicle",
          value: function getVehicle(rego) {
            /**
             * [Depreciated] Gets the specified vehicle only
             * @param {string} rego rego of the vehicle to retrieve
             * @return {Observable<Vehicle>} Observable which resolves to the specified vehicle
             */
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceFetcherModes === 2) {
              // fetch from static array
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_3__["DUMMY_VEHICLES"].find(function (chk_vehicle) {
                return chk_vehicle.rego === rego;
              }));
            } else {
              // HTTP fetch
              if (this.fleetcache === undefined) {// not yet fetched, fetch it
              } // TODO: FIX WITH YI-SONG IMPLEMENTATION


              return this.http.get("".concat(this.fleetUrl, "/").concat(rego)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) {
                console.log("Vehicle received:");
                console.log(x);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_6__["handleError"])("getVehicle rego=".concat(rego)))); //return of(this.fleetcache.find(chk_vehicle => chk_vehicle.rego === rego));
            }
          } // Submits any changes to the server and responds with the response

        }, {
          key: "submitChanges",
          value: function submitChanges(newchg, modchg, delchg) {
            /**
             * Submits edits to the server - server will notify of any validation errors through response
             * @param newchg  Array of new vehicle records
             * @param modchg  Array of modified, existing vehicle records
             * @param delchg  Array of deleted vehicle records
             * @return {Observable<any>} Observable containing server response of any failed validation checks
             */
            var output = {
              "fleetVehiclesDelete": delchg,
              "fleetVehiclesCreate": newchg,
              "fleetVehiclesUpdate": modchg
            };
            output.fleetVehiclesCreate.forEach(function (x) {
              return delete x._id;
            }); // id undefined - irrelevant to backend

            console.log("Bin edits sent:");
            console.log(output); // log for debug purposes

            return this.http.put(this.fleetUrl, output);
          }
        }]);

        return FleetfetcherService;
      }();

      FleetfetcherService.ɵfac = function FleetfetcherService_Factory(t) {
        return new (t || FleetfetcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
      };

      FleetfetcherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FleetfetcherService,
        factory: FleetfetcherService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FleetfetcherService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/gmaps_apikey.ts":
    /*!*********************************!*\
      !*** ./src/app/gmaps_apikey.ts ***!
      \*********************************/

    /*! exports provided: GMAPS_API_KEY */

    /***/
    function srcAppGmaps_apikeyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GMAPS_API_KEY", function () {
        return GMAPS_API_KEY;
      });
      /**
       * This is my google maps API key. Key is needed for frontend to function, can be replaced with another
       * Replacement key should have the appropriate JS and directions API enabled in GCP console
       * NB: This key is restricted, and will necessarily be included in the transpiled build files
       *
       * It will be necessary to include this file in the final build - it is intentionally git-ignored
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var GMAPS_API_KEY = "AIzaSyBkb7M2-KAlddjBYQrmDrh8G6QKmptfEDc";
      /***/
    },

    /***/
    "./src/app/httpHelpers.ts":
    /*!********************************!*\
      !*** ./src/app/httpHelpers.ts ***!
      \********************************/

    /*! exports provided: handleError */

    /***/
    function srcAppHttpHelpersTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "handleError", function () {
        return handleError;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /**
       * File for any generic HTTP functions and snippets
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Generalised HTTP error handler I made to deal with any response failures


      function handleError() {
        var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
        var result = arguments.length > 1 ? arguments[1] : undefined;

        /**
         * Logs a HTTP method failure and returns the server response
         * @param {string} operation name of the operation attempted, which failed
         * @param {result?} result result of the operation, if any
         * @return {result?} Returns response, if available, whatever type it may be
         */
        return function (error) {
          console.error(error); // log error to console

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
      }
      /***/

    },

    /***/
    "./src/app/mainmenu/mainmenu.component.ts":
    /*!************************************************!*\
      !*** ./src/app/mainmenu/mainmenu.component.ts ***!
      \************************************************/

    /*! exports provided: MainmenuComponent */

    /***/
    function srcAppMainmenuMainmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainmenuComponent", function () {
        return MainmenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /**
       * Main menu component
       *
       * Very basic 50px high bar which has button toggles for navigating to the four
       * views within the webapp. This component is always visible so long as the app is loaded.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var MainmenuComponent = /*#__PURE__*/function () {
        function MainmenuComponent() {
          _classCallCheck(this, MainmenuComponent);

          // This name started as an off-the-cuff placeholder, looks like it stuck :p
          this.title = 'BinRouter';
        }

        _createClass(MainmenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            console.log("Main menu loaded at time ".concat(new Date()));
          }
        }]);

        return MainmenuComponent;
      }();

      MainmenuComponent.ɵfac = function MainmenuComponent_Factory(t) {
        return new (t || MainmenuComponent)();
      };

      MainmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainmenuComponent,
        selectors: [["app-mainmenu"]],
        decls: 27,
        vars: 6,
        consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], ["color", "primary", 1, "menubar"], ["mat-button", "", 3, "routerLink"], [1, "Title"]],
        template: function MainmenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Routing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Heat Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "local_shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Fleet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "routes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "heatmap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "bins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "fleet");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: ["h2[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n}\n.mat-icon[_ngcontent-%COMP%] {\n    font-size: 150%;\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n    height: 50px;\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbm1lbnUvbWFpbm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUI7SUFDSSx5Q0FBeUM7SUFDekMsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbm1lbnUvbWFpbm1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENTUyBGb3IgTWFpbiBNZW51IEJhciAqL1xuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4ubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainmenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mainmenu',
            templateUrl: './mainmenu.component.html',
            styleUrls: ['./mainmenu.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/mock-data.ts":
    /*!******************************!*\
      !*** ./src/app/mock-data.ts ***!
      \******************************/

    /*! exports provided: DUMMY_BINS, DUMMY_DEPOTS, DUMMY_VEHICLES, DUMMY_ROUTES */

    /***/
    function srcAppMockDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DUMMY_BINS", function () {
        return DUMMY_BINS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DUMMY_DEPOTS", function () {
        return DUMMY_DEPOTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DUMMY_VEHICLES", function () {
        return DUMMY_VEHICLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DUMMY_ROUTES", function () {
        return DUMMY_ROUTES;
      });
      /**
       * This file is pretending to be data - it should be fetched from a server in final product
       * Service is using observables to make transition to prod setup seamless - all internal components
       * will remain the same, regardless of whether services are fetching from a static URL, an actual backend db,
       * or from this static file filled with dummy data.
       *
       * Only the services will need to be modified later to support transition to full-functionality.
       * THIS FILE IS KEPT FOR LEGACY PURPOSES - FRONTEND NOW EITHER FETCHES FROM STATIC JSON OR FULL BACKEND STACK
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var DUMMY_BINS = [{
        "serial": String(0),
        "smartSerial": 0,
        "lat": -37.811495635257366,
        "lng": 144.96932295134278,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(1),
        "smartSerial": 0,
        "lat": -37.81117354183993,
        "lng": 144.97054603865357,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(2),
        "smartSerial": 0,
        "lat": -37.8112413510972,
        "lng": 144.97168329527588,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(3),
        "smartSerial": 0,
        "lat": -37.81261447515821,
        "lng": 144.9718120413086,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(4),
        "smartSerial": 0,
        "lat": -37.81376720156546,
        "lng": 144.97108248045654,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(5),
        "smartSerial": 0,
        "lat": -37.81459783149587,
        "lng": 144.96917274763794,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(6),
        "smartSerial": 0,
        "lat": -37.81453002532125,
        "lng": 144.96679094603272,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(7),
        "smartSerial": 0,
        "lat": -37.813580732337456,
        "lng": 144.96584680845947,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(8),
        "smartSerial": 0,
        "lat": -37.81319084061156,
        "lng": 144.96380832960816,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(9),
        "smartSerial": 0,
        "lat": -37.81047849336229,
        "lng": 144.96760633757324,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(10),
        "smartSerial": 0,
        "lat": -37.809190093513884,
        "lng": 144.96951607039185,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(11),
        "smartSerial": 0,
        "lat": -37.80846112048377,
        "lng": 144.9685504751465,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(12),
        "smartSerial": 0,
        "lat": -37.807952530386984,
        "lng": 144.96614721586914,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(13),
        "smartSerial": 0,
        "lat": -37.80763905760432,
        "lng": 144.96269591556322,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(14),
        "smartSerial": 0,
        "lat": -37.80841889763092,
        "lng": 144.96027119861375,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(15),
        "smartSerial": 0,
        "lat": -37.808842720278115,
        "lng": 144.95879061923753,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(16),
        "smartSerial": 0,
        "lat": -37.809249587730875,
        "lng": 144.95756753192674,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(17),
        "smartSerial": 0,
        "lat": -37.80997855297712,
        "lng": 144.95821126209032,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(18),
        "smartSerial": 0,
        "lat": -37.81128389136662,
        "lng": 144.9587691615654,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(19),
        "smartSerial": 0,
        "lat": -37.8129112939211,
        "lng": 144.96001370654832,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(20),
        "smartSerial": 0,
        "lat": -37.81301300538973,
        "lng": 144.95939143405687,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(21),
        "smartSerial": 0,
        "lat": -37.816223932650594,
        "lng": 144.9638345367771,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(22),
        "smartSerial": 0,
        "lat": -37.81790207866253,
        "lng": 144.96181751559791,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(23),
        "smartSerial": 0,
        "lat": -37.8153594183016,
        "lng": 144.95984340976295,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(24),
        "smartSerial": 0,
        "lat": -37.81720709352806,
        "lng": 144.96754671405373,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(25),
        "smartSerial": 0,
        "lat": -37.81851230411743,
        "lng": 144.95703245471535,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(26),
        "smartSerial": 0,
        "lat": -37.818885217189816,
        "lng": 144.9542858726841,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(27),
        "smartSerial": 0,
        "lat": -37.81712233879575,
        "lng": 144.95353485415993,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(28),
        "smartSerial": 0,
        "lat": -37.81432537803898,
        "lng": 144.9545004494053,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(29),
        "smartSerial": 0,
        "lat": -37.81268105468004,
        "lng": 144.95377088855324,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(30),
        "smartSerial": 0,
        "lat": -37.81937753793747,
        "lng": 144.9594581646533,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(31),
        "smartSerial": 0,
        "lat": -37.80971515577764,
        "lng": 144.95233421750976,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(32),
        "smartSerial": 0,
        "lat": -37.80978395301097,
        "lng": 144.9651575088501,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(33),
        "smartSerial": 0,
        "lat": -37.80952290063189,
        "lng": 144.96390801390714,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(34),
        "smartSerial": 0,
        "lat": -37.80976871438835,
        "lng": 144.96373098811216,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(35),
        "smartSerial": 0,
        "lat": -37.81132834122377,
        "lng": 144.9619929166705,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(36),
        "smartSerial": 0,
        "lat": -37.81173519498032,
        "lng": 144.9647448631198,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(37),
        "smartSerial": 0,
        "lat": -37.81302355041901,
        "lng": 144.96339839419431,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(38),
        "smartSerial": 0,
        "lat": -37.81278198548672,
        "lng": 144.96422987898893,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(39),
        "smartSerial": 0,
        "lat": -37.81012895720821,
        "lng": 144.96174615344114,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(40),
        "smartSerial": 0,
        "lat": -37.80908455244779,
        "lng": 144.96162430548597,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(41),
        "smartSerial": 0,
        "lat": -37.8078936085234,
        "lng": 144.9613614490025,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(42),
        "smartSerial": 0,
        "lat": -37.807119845845605,
        "lng": 144.96009216709217,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(43),
        "smartSerial": 0,
        "lat": -37.807213088676995,
        "lng": 144.9597542087563,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(44),
        "smartSerial": 0,
        "lat": -37.80661374106595,
        "lng": 144.9593961238861,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(45),
        "smartSerial": 0,
        "lat": -37.80593716214227,
        "lng": 144.96140108509144,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(46),
        "smartSerial": 0,
        "lat": -37.806466957875735,
        "lng": 144.9616263906487,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(47),
        "smartSerial": 0,
        "lat": -37.80540826874511,
        "lng": 144.96294693773757,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(48),
        "smartSerial": 0,
        "lat": -37.80524297051455,
        "lng": 144.9632741672374,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(49),
        "smartSerial": 0,
        "lat": -37.80693183972442,
        "lng": 144.96420704515356,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(50),
        "smartSerial": 0,
        "lat": -37.807016606155436,
        "lng": 144.96490441949743,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(51),
        "smartSerial": 0,
        "lat": -37.80652495950109,
        "lng": 144.96512972505468,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(52),
        "smartSerial": 0,
        "lat": -37.80601211769276,
        "lng": 144.9653121152677,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(53),
        "smartSerial": 0,
        "lat": -37.80550774913492,
        "lng": 144.96503316553014,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(54),
        "smartSerial": 0,
        "lat": -37.805051269086114,
        "lng": 144.96638275880582,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(55),
        "smartSerial": 0,
        "lat": -37.80502160005676,
        "lng": 144.96605016488797,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(56),
        "smartSerial": 0,
        "lat": -37.80479272428682,
        "lng": 144.96635057229764,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(57),
        "smartSerial": 0,
        "lat": -37.80365108041411,
        "lng": 144.96624112129211,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(58),
        "smartSerial": 0,
        "lat": -37.803731093177625,
        "lng": 144.96626701846662,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(59),
        "smartSerial": 0,
        "lat": -37.80298169351198,
        "lng": 144.96724379274102,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(60),
        "smartSerial": 0,
        "lat": -37.80279095848483,
        "lng": 144.96744227620812,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(61),
        "smartSerial": 0,
        "lat": -37.80210430830862,
        "lng": 144.966519596307,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(62),
        "smartSerial": 0,
        "lat": -37.80251091181261,
        "lng": 144.9667239189148,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(63),
        "smartSerial": 0,
        "lat": -37.802563262913885,
        "lng": 144.9667556307003,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(64),
        "smartSerial": 0,
        "lat": -37.80279214559298,
        "lng": 144.96507656785698,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(65),
        "smartSerial": 0,
        "lat": -37.80277519134478,
        "lng": 144.96495855066033,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(66),
        "smartSerial": 0,
        "lat": -37.80382210887134,
        "lng": 144.96477079602928,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(67),
        "smartSerial": 0,
        "lat": -37.80466556604358,
        "lng": 144.9649156353161,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(68),
        "smartSerial": 0,
        "lat": -37.806269784108736,
        "lng": 144.96683253703492,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(69),
        "smartSerial": 0,
        "lat": -37.806151109877916,
        "lng": 144.96753424851474,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(70),
        "smartSerial": 0,
        "lat": -37.807248839236266,
        "lng": 144.96717483250674,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(71),
        "smartSerial": 0,
        "lat": -37.807503137145794,
        "lng": 144.96662229744967,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(72),
        "smartSerial": 0,
        "lat": -37.807693860003255,
        "lng": 144.96595710961398,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(73),
        "smartSerial": 0,
        "lat": -37.808848899394555,
        "lng": 144.9661163102143,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(74),
        "smartSerial": 0,
        "lat": -37.811842170251715,
        "lng": 144.9567844715029,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(75),
        "smartSerial": 0,
        "lat": -37.80931625392693,
        "lng": 144.956441148749,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(76),
        "smartSerial": 0,
        "lat": -37.80753619387712,
        "lng": 144.95466016196312,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(77),
        "smartSerial": 0,
        "lat": -37.80601039396733,
        "lng": 144.95491765402855,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(78),
        "smartSerial": 0,
        "lat": -37.8057560909174,
        "lng": 144.9523856487185,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(79),
        "smartSerial": 0,
        "lat": -37.8039201704889,
        "lng": 144.95526097678245,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(80),
        "smartSerial": 0,
        "lat": -37.80398798640701,
        "lng": 144.95573304556908,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(81),
        "smartSerial": 0,
        "lat": -37.80414057199507,
        "lng": 144.9602391567141,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(82),
        "smartSerial": 0,
        "lat": -37.80212302596919,
        "lng": 144.95796464346947,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(83),
        "smartSerial": 0,
        "lat": -37.80110575497273,
        "lng": 144.95624802969994,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(84),
        "smartSerial": 0,
        "lat": -37.80186870953358,
        "lng": 144.95466016196312,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(85),
        "smartSerial": 0,
        "lat": -37.80113966423167,
        "lng": 144.95354436301292,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(86),
        "smartSerial": 0,
        "lat": -37.80112270960415,
        "lng": 144.95302937888206,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(87),
        "smartSerial": 0,
        "lat": -37.79968333461159,
        "lng": 144.95457433127464,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(88),
        "smartSerial": 0,
        "lat": -37.798089551190444,
        "lng": 144.9574282016665,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(89),
        "smartSerial": 0,
        "lat": -37.79793695310161,
        "lng": 144.95813630484642,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(90),
        "smartSerial": 0,
        "lat": -37.799700289569515,
        "lng": 144.95798610114159,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(91),
        "smartSerial": 0,
        "lat": -37.79868298520591,
        "lng": 144.96414445303978,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(92),
        "smartSerial": 0,
        "lat": -37.797767399299886,
        "lng": 144.96420882605614,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(93),
        "smartSerial": 0,
        "lat": -37.79642791058485,
        "lng": 144.96285699271263,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(94),
        "smartSerial": 0,
        "lat": -37.796088795665,
        "lng": 144.95996020697655,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(95),
        "smartSerial": 0,
        "lat": -37.798784716272735,
        "lng": 144.96556065939964,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(96),
        "smartSerial": 0,
        "lat": -37.80076844407258,
        "lng": 144.96822141074242,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(97),
        "smartSerial": 0,
        "lat": -37.79944596479208,
        "lng": 144.96961615943016,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(98),
        "smartSerial": 0,
        "lat": -37.799483127194186,
        "lng": 144.97215228084187,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(99),
        "smartSerial": 0,
        "lat": -37.79995786583157,
        "lng": 144.97210936549763,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(100),
        "smartSerial": 0,
        "lat": -37.801093835185384,
        "lng": 144.9740834713326,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(101),
        "smartSerial": 0,
        "lat": -37.80533237258894,
        "lng": 144.97389035228352,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(102),
        "smartSerial": 0,
        "lat": -37.80579012007464,
        "lng": 144.97597174647908,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(103),
        "smartSerial": 0,
        "lat": -37.809358991137984,
        "lng": 144.97544573818524,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(104),
        "smartSerial": 0,
        "lat": -37.80925727463567,
        "lng": 144.97188376461347,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(105),
        "smartSerial": 0,
        "lat": -37.811800145158244,
        "lng": 144.97557448421796,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(106),
        "smartSerial": 0,
        "lat": -37.81225785255195,
        "lng": 144.9776344207414,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(107),
        "smartSerial": 0,
        "lat": -37.81657696893482,
        "lng": 144.97870164369823,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(108),
        "smartSerial": 0,
        "lat": -37.81708549962601,
        "lng": 144.97925954317333,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(109),
        "smartSerial": 0,
        "lat": -37.821323119150826,
        "lng": 144.9678011462617,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(110),
        "smartSerial": 0,
        "lat": -37.81830595899197,
        "lng": 144.97895913576366,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(111),
        "smartSerial": 0,
        "lat": -37.8168481857394,
        "lng": 144.98039679979564,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(112),
        "smartSerial": 0,
        "lat": -37.815868113767394,
        "lng": 144.9830614672691,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(113),
        "smartSerial": 0,
        "lat": -37.820275649727385,
        "lng": 144.95126343699786,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(114),
        "smartSerial": 0,
        "lat": -37.8186823107144,
        "lng": 144.94888163539264,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(115),
        "smartSerial": 0,
        "lat": -37.82080110505168,
        "lng": 144.94913912745807,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(116),
        "smartSerial": 0,
        "lat": -37.8212757066455,
        "lng": 144.94787312480304,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(117),
        "smartSerial": 0,
        "lat": -37.81118976619539,
        "lng": 144.95031929942462,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(118),
        "smartSerial": 0,
        "lat": -37.809223271076995,
        "lng": 144.9490532967696,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(119),
        "smartSerial": 0,
        "lat": -37.80803656765059,
        "lng": 144.95182133647296,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(120),
        "smartSerial": 0,
        "lat": -37.806105274732964,
        "lng": 144.94989507399515,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(121),
        "smartSerial": 0,
        "lat": -37.8047659372185,
        "lng": 144.94914405547098,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(122),
        "smartSerial": 0,
        "lat": -37.80449453953959,
        "lng": 144.94951486587524,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(123),
        "smartSerial": 0,
        "lat": -37.803901288706044,
        "lng": 144.94712703429178,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(124),
        "smartSerial": 0,
        "lat": -37.80183287276174,
        "lng": 144.95008819304422,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(125),
        "smartSerial": 0,
        "lat": -37.801629418884055,
        "lng": 144.9530922671409,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(126),
        "smartSerial": 0,
        "lat": -37.80030695501874,
        "lng": 144.94989507399515,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(127),
        "smartSerial": 0,
        "lat": -37.798950557227364,
        "lng": 144.94854324065165,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(128),
        "smartSerial": 0,
        "lat": -37.800374774254486,
        "lng": 144.9483715792747,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(129),
        "smartSerial": 0,
        "lat": -37.8011716456102,
        "lng": 144.94768493376688,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(130),
        "smartSerial": 0,
        "lat": -37.7974754463576,
        "lng": 144.95270602904276,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(131),
        "smartSerial": 0,
        "lat": -37.79663046592157,
        "lng": 144.9564861199487,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(132),
        "smartSerial": 0,
        "lat": -37.7964749427808,
        "lng": 144.96599335283327,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(133),
        "smartSerial": 0,
        "lat": -37.796661455204436,
        "lng": 144.96891159624147,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(134),
        "smartSerial": 0,
        "lat": -37.796753998348855,
        "lng": 144.97324604600954,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(135),
        "smartSerial": 0,
        "lat": -37.7973813540776,
        "lng": 144.97526306718873,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(136),
        "smartSerial": 0,
        "lat": -37.79851736305472,
        "lng": 144.97549910158205,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(137),
        "smartSerial": 0,
        "lat": -37.79904297323707,
        "lng": 144.97629303545045,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(138),
        "smartSerial": 0,
        "lat": -37.800263730842836,
        "lng": 144.97594971269655,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(139),
        "smartSerial": 0,
        "lat": -37.802400008106474,
        "lng": 144.97652906984376,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(140),
        "smartSerial": 0,
        "lat": -37.8042310537262,
        "lng": 144.97725863069581,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(141),
        "smartSerial": 0,
        "lat": -37.80609596093379,
        "lng": 144.97468371004152,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(142),
        "smartSerial": 0,
        "lat": -37.80780824335318,
        "lng": 144.97464079469728,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(143),
        "smartSerial": 0,
        "lat": -37.81248328620422,
        "lng": 144.94945646920067,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(144),
        "smartSerial": 0,
        "lat": -37.81012691763072,
        "lng": 144.94741799034935,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(145),
        "smartSerial": 0,
        "lat": -37.809448812020946,
        "lng": 144.94683863320213,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(146),
        "smartSerial": 0,
        "lat": -37.80882155878758,
        "lng": 144.94604469933373,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(147),
        "smartSerial": 0,
        "lat": -37.809126709674764,
        "lng": 144.94587303795677,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(148),
        "smartSerial": 0,
        "lat": -37.81016082274773,
        "lng": 144.94574429192406,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(149),
        "smartSerial": 0,
        "lat": -37.81043206312342,
        "lng": 144.94621636071068,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(150),
        "smartSerial": 0,
        "lat": -37.81124577827211,
        "lng": 144.94681717553001,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(151),
        "smartSerial": 0,
        "lat": -37.81351735226738,
        "lng": 144.94979979195458,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(152),
        "smartSerial": 0,
        "lat": -37.81354931520682,
        "lng": 144.97389430129368,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(153),
        "smartSerial": 0,
        "lat": -37.81563435428812,
        "lng": 144.97194165313084,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(154),
        "smartSerial": 0,
        "lat": -37.813701881038774,
        "lng": 144.97438782775242,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(155),
        "smartSerial": 0,
        "lat": -37.80076656926903,
        "lng": 144.97069710814793,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(156),
        "smartSerial": 0,
        "lat": -37.804971217969054,
        "lng": 144.96893757903416,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(157),
        "smartSerial": 0,
        "lat": -37.81056574223849,
        "lng": 144.98292798125584,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(158),
        "smartSerial": 0,
        "lat": -37.79259394639045,
        "lng": 144.9834429653867,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(159),
        "smartSerial": 0,
        "lat": -37.80582977136442,
        "lng": 144.9793260879557,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(160),
        "smartSerial": 0,
        "lat": -37.80311715371738,
        "lng": 144.98088355767692,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(161),
        "smartSerial": 0,
        "lat": -37.80182862543232,
        "lng": 144.98161311852897,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(162),
        "smartSerial": 0,
        "lat": -37.800540074667914,
        "lng": 144.9825572561022,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(163),
        "smartSerial": 0,
        "lat": -37.797522065162966,
        "lng": 144.98398543660156,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(164),
        "smartSerial": 0,
        "lat": -37.79725077736974,
        "lng": 144.98196841542236,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(165),
        "smartSerial": 0,
        "lat": -37.79714904419043,
        "lng": 144.9807667857837,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(166),
        "smartSerial": 0,
        "lat": -37.796877755027324,
        "lng": 144.97780562703124,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(167),
        "smartSerial": 0,
        "lat": -37.798539385514474,
        "lng": 144.97814894978515,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(168),
        "smartSerial": 0,
        "lat": -37.799251501424415,
        "lng": 144.9796509868335,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(169),
        "smartSerial": 0,
        "lat": -37.8011504436216,
        "lng": 144.98372794453613,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(170),
        "smartSerial": 0,
        "lat": -37.801625171542945,
        "lng": 144.98274089161865,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(171),
        "smartSerial": 0,
        "lat": -37.802032078761286,
        "lng": 144.98274089161865,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(172),
        "smartSerial": 0,
        "lat": -37.796233439272086,
        "lng": 144.98553038899414,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(173),
        "smartSerial": 0,
        "lat": -37.795894323459535,
        "lng": 144.9845862514209,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(174),
        "smartSerial": 0,
        "lat": -37.79594930209236,
        "lng": 144.97992038726807,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(175),
        "smartSerial": 0,
        "lat": -37.794326275843744,
        "lng": 144.98239756886474,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(176),
        "smartSerial": 0,
        "lat": -37.79449583754348,
        "lng": 144.98364211384765,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(177),
        "smartSerial": 0,
        "lat": -37.79388541360319,
        "lng": 144.98608828846923,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(178),
        "smartSerial": 0,
        "lat": -37.79391932617663,
        "lng": 144.98776198689453,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(179),
        "smartSerial": 0,
        "lat": -37.79581840544537,
        "lng": 144.98733283345214,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(180),
        "smartSerial": 0,
        "lat": -37.79781916829386,
        "lng": 144.98698951069824,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(181),
        "smartSerial": 0,
        "lat": -37.803990671611906,
        "lng": 144.98302869604052,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(182),
        "smartSerial": 0,
        "lat": -37.80582167779575,
        "lng": 144.98225621984423,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(183),
        "smartSerial": 0,
        "lat": -37.80744920073768,
        "lng": 144.9801962833208,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(184),
        "smartSerial": 0,
        "lat": -37.80494008789245,
        "lng": 144.98474530981005,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(185),
        "smartSerial": 0,
        "lat": -37.806364189428486,
        "lng": 144.98465947912158,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(186),
        "smartSerial": 0,
        "lat": -37.80521134744512,
        "lng": 144.98723439977587,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(187),
        "smartSerial": 0,
        "lat": -37.8048722728486,
        "lng": 144.98920850561083,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(188),
        "smartSerial": 0,
        "lat": -37.80358377518398,
        "lng": 144.9907534580034,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(189),
        "smartSerial": 0,
        "lat": -37.797615703360655,
        "lng": 144.9897234897417,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(190),
        "smartSerial": 0,
        "lat": -37.79666619292922,
        "lng": 144.9915259341997,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(191),
        "smartSerial": 0,
        "lat": -37.798429559731034,
        "lng": 144.98980932043017,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(192),
        "smartSerial": 0,
        "lat": -37.80053198051956,
        "lng": 144.99350004003466,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(193),
        "smartSerial": 0,
        "lat": -37.800328523058525,
        "lng": 144.98963765905322,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(194),
        "smartSerial": 0,
        "lat": -37.80012506503708,
        "lng": 144.9874918918413,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(195),
        "smartSerial": 0,
        "lat": -37.806635443750324,
        "lng": 144.98950718996193,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(196),
        "smartSerial": 0,
        "lat": -37.80880544245594,
        "lng": 144.9881338989463,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(197),
        "smartSerial": 0,
        "lat": -37.80880544245594,
        "lng": 144.98607396242286,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(198),
        "smartSerial": 0,
        "lat": -37.810568519450044,
        "lng": 144.98658894655372,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(199),
        "smartSerial": 0,
        "lat": -37.810839758328065,
        "lng": 144.98899220583107,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(200),
        "smartSerial": 0,
        "lat": -37.81141613763552,
        "lng": 144.9907088196006,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(201),
        "smartSerial": 0,
        "lat": -37.80948355397406,
        "lng": 144.99173878786232,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(202),
        "smartSerial": 0,
        "lat": -37.81263669072808,
        "lng": 144.98362778780128,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(203),
        "smartSerial": 0,
        "lat": -37.81321804971717,
        "lng": 144.98817681429054,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(204),
        "smartSerial": 0,
        "lat": -37.81430296031752,
        "lng": 144.98796223756935,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(205),
        "smartSerial": 0,
        "lat": -37.81454028238616,
        "lng": 144.98594521639015,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(206),
        "smartSerial": 0,
        "lat": -37.81437076670069,
        "lng": 144.98864888307716,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(207),
        "smartSerial": 0,
        "lat": -37.81579468636135,
        "lng": 144.98766183015968,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(208),
        "smartSerial": 0,
        "lat": -37.81623541783314,
        "lng": 144.98564480898048,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(209),
        "smartSerial": 0,
        "lat": -37.814235153872076,
        "lng": 144.99506472704078,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(210),
        "smartSerial": 0,
        "lat": -37.81521834123575,
        "lng": 144.9948501503196,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(211),
        "smartSerial": 0,
        "lat": -37.81542175767622,
        "lng": 144.99287604448463,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(212),
        "smartSerial": 0,
        "lat": -37.81576078383146,
        "lng": 144.99253272173073,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(213),
        "smartSerial": 0,
        "lat": -37.81623541783314,
        "lng": 144.99545096513893,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(214),
        "smartSerial": 0,
        "lat": -37.81667614667369,
        "lng": 144.99459265825416,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(215),
        "smartSerial": 0,
        "lat": -37.81698126509886,
        "lng": 144.99459265825416,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(216),
        "smartSerial": 0,
        "lat": -37.817421989486526,
        "lng": 144.99197482225563,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(217),
        "smartSerial": 0,
        "lat": -37.82046949588583,
        "lng": 144.99175355916924,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(218),
        "smartSerial": 0,
        "lat": -37.81979148526904,
        "lng": 144.98977945333428,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(219),
        "smartSerial": 0,
        "lat": -37.82158819978754,
        "lng": 144.98952196126885,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(220),
        "smartSerial": 0,
        "lat": -37.822639088007165,
        "lng": 144.98977945333428,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(221),
        "smartSerial": 0,
        "lat": -37.82260518862074,
        "lng": 144.99256895070977,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(222),
        "smartSerial": 0,
        "lat": -37.82331707246608,
        "lng": 144.9939422417254,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(223),
        "smartSerial": 0,
        "lat": -37.82762212843657,
        "lng": 144.98903394478083,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(224),
        "smartSerial": 0,
        "lat": -37.82705098476832,
        "lng": 144.9935829712701,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(225),
        "smartSerial": 0,
        "lat": -37.82976272311062,
        "lng": 144.99130845802546,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(226),
        "smartSerial": 0,
        "lat": -37.82945765752209,
        "lng": 144.99242425697565,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(227),
        "smartSerial": 0,
        "lat": -37.828949212071734,
        "lng": 144.99474168556452,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(228),
        "smartSerial": 0,
        "lat": -37.83016947526665,
        "lng": 144.98701692360163,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(229),
        "smartSerial": 0,
        "lat": -37.828620245333035,
        "lng": 144.98502243719184,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(230),
        "smartSerial": 0,
        "lat": -37.82364639775614,
        "lng": 144.9696976902552,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(231),
        "smartSerial": 0,
        "lat": -37.825104036748186,
        "lng": 144.9699122669764,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(232),
        "smartSerial": 0,
        "lat": -37.824527764308705,
        "lng": 144.96729443097786,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(233),
        "smartSerial": 0,
        "lat": -37.82340910496283,
        "lng": 144.96527740979866,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(234),
        "smartSerial": 0,
        "lat": -37.82307011393463,
        "lng": 144.9642045261927,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(235),
        "smartSerial": 0,
        "lat": -37.82435827155835,
        "lng": 144.96278831983284,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(236),
        "smartSerial": 0,
        "lat": -37.82361249883238,
        "lng": 144.9610717060633,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(237),
        "smartSerial": 0,
        "lat": -37.82500234193879,
        "lng": 144.95998294482453,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(238),
        "smartSerial": 0,
        "lat": -37.82483285027838,
        "lng": 144.95843799243195,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(239),
        "smartSerial": 0,
        "lat": -37.82588369229791,
        "lng": 144.95689304003938,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(240),
        "smartSerial": 0,
        "lat": -37.825544712636216,
        "lng": 144.95586307177766,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(241),
        "smartSerial": 0,
        "lat": -37.82249382561325,
        "lng": 144.95204360614045,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(242),
        "smartSerial": 0,
        "lat": -37.821612434770906,
        "lng": 144.95118529925568,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(243),
        "smartSerial": 0,
        "lat": -37.82168023444015,
        "lng": 144.94968326220734,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(244),
        "smartSerial": 0,
        "lat": -37.81997607826449,
        "lng": 144.94582746782527,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(245),
        "smartSerial": 0,
        "lat": -37.82151424874816,
        "lng": 144.945330619812,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(246),
        "smartSerial": 0,
        "lat": -37.82126428988978,
        "lng": 144.94556997575984,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(247),
        "smartSerial": 0,
        "lat": -37.826111832134664,
        "lng": 144.94514082231746,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(248),
        "smartSerial": 0,
        "lat": -37.818653942954995,
        "lng": 144.94704333636966,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(249),
        "smartSerial": 0,
        "lat": -37.81443422576821,
        "lng": 144.95361941414194,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(250),
        "smartSerial": 0,
        "lat": -37.81463351108312,
        "lng": 144.94522476192475,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(251),
        "smartSerial": 0,
        "lat": -37.809162918809506,
        "lng": 144.94440937038422,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(252),
        "smartSerial": 0,
        "lat": -37.807399808253784,
        "lng": 144.94501018520356,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(253),
        "smartSerial": 0,
        "lat": -37.806586050722146,
        "lng": 144.94320774074555,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(254),
        "smartSerial": 0,
        "lat": -37.80716246323337,
        "lng": 144.94745635982514,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(255),
        "smartSerial": 0,
        "lat": -37.804619432999914,
        "lng": 144.94543933864594,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(256),
        "smartSerial": 0,
        "lat": -37.80229050544318,
        "lng": 144.94447231292725,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(257),
        "smartSerial": 0,
        "lat": -37.80055040248385,
        "lng": 144.94419479366303,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(258),
        "smartSerial": 0,
        "lat": -37.80214413280869,
        "lng": 144.94273567195893,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(259),
        "smartSerial": 0,
        "lat": -37.80248321993046,
        "lng": 144.94222068782807,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(260),
        "smartSerial": 0,
        "lat": -37.805128046052175,
        "lng": 144.94166278835297,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(261),
        "smartSerial": 0,
        "lat": -37.80030597117745,
        "lng": 144.94166278835297,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(262),
        "smartSerial": 0,
        "lat": -37.79847482825036,
        "lng": 144.94445228572846,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(263),
        "smartSerial": 0,
        "lat": -37.79732186311917,
        "lng": 144.9472967123527,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(264),
        "smartSerial": 0,
        "lat": -37.79538891061509,
        "lng": 144.94755420441814,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(265),
        "smartSerial": 0,
        "lat": -37.79562629347134,
        "lng": 144.95274696107097,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(266),
        "smartSerial": 0,
        "lat": -37.795456734366134,
        "lng": 144.9543348288078,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(267),
        "smartSerial": 0,
        "lat": -37.79389677233888,
        "lng": 144.95527896638103,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(268),
        "smartSerial": 0,
        "lat": -37.793727209264254,
        "lng": 144.95690974946208,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(269),
        "smartSerial": 0,
        "lat": -37.79396459745977,
        "lng": 144.9586345556613,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(270),
        "smartSerial": 0,
        "lat": -37.791997643674456,
        "lng": 144.96013659270963,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(271),
        "smartSerial": 0,
        "lat": -37.789607311694226,
        "lng": 144.95835535083373,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(272),
        "smartSerial": 0,
        "lat": -37.7898447131267,
        "lng": 144.95917074237425,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(273),
        "smartSerial": 0,
        "lat": -37.78780981895612,
        "lng": 144.95779745135863,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(274),
        "smartSerial": 0,
        "lat": -37.787402833397685,
        "lng": 144.95801202807982,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(275),
        "smartSerial": 0,
        "lat": -37.789262080203834,
        "lng": 144.96902292830018,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(276),
        "smartSerial": 0,
        "lat": -37.78946556814335,
        "lng": 144.97082537275818,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(277),
        "smartSerial": 0,
        "lat": -37.790177771518785,
        "lng": 144.972413240495,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(278),
        "smartSerial": 0,
        "lat": -37.79295418603359,
        "lng": 144.97187394866273,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(279),
        "smartSerial": 0,
        "lat": -37.79047849492524,
        "lng": 144.97651739658747,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(280),
        "smartSerial": 0,
        "lat": -37.788850598034266,
        "lng": 144.97922106327448,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(281),
        "smartSerial": 0,
        "lat": -37.78695133966778,
        "lng": 144.97840567173395,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(282),
        "smartSerial": 0,
        "lat": -37.7851537823247,
        "lng": 144.97591658176813,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(283),
        "smartSerial": 0,
        "lat": -37.78400060931022,
        "lng": 144.97424288334284,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(284),
        "smartSerial": 0,
        "lat": -37.7836953546181,
        "lng": 144.97261210026178,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(285),
        "smartSerial": 0,
        "lat": -37.782169062246204,
        "lng": 144.97033758701716,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(286),
        "smartSerial": 0,
        "lat": -37.78210122629813,
        "lng": 144.96874971928034,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(287),
        "smartSerial": 0,
        "lat": -37.77993044308748,
        "lng": 144.9674622589532,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(288),
        "smartSerial": 0,
        "lat": -37.77979476702006,
        "lng": 144.9723975235406,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(289),
        "smartSerial": 0,
        "lat": -37.78294917117417,
        "lng": 144.96651812137995,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(290),
        "smartSerial": 0,
        "lat": -37.78138894508452,
        "lng": 144.96394320072565,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(291),
        "smartSerial": 0,
        "lat": -37.77789527592807,
        "lng": 144.9650160843316,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(292),
        "smartSerial": 0,
        "lat": -37.778641510392355,
        "lng": 144.965445237774,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(293),
        "smartSerial": 0,
        "lat": -37.77598405191831,
        "lng": 144.9707252566889,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(294),
        "smartSerial": 0,
        "lat": -37.777510472003456,
        "lng": 144.97525275607504,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(295),
        "smartSerial": 0,
        "lat": -37.77822279059068,
        "lng": 144.97821391482748,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(296),
        "smartSerial": 0,
        "lat": -37.77866374627644,
        "lng": 144.97920096774496,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(297),
        "smartSerial": 0,
        "lat": -37.78082241642273,
        "lng": 144.98103095447257,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(298),
        "smartSerial": 0,
        "lat": -37.77824455966445,
        "lng": 144.98270465289787,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(299),
        "smartSerial": 0,
        "lat": -37.781195519821765,
        "lng": 144.983992113225,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(300),
        "smartSerial": 0,
        "lat": -37.7779053612931,
        "lng": 144.98765884380785,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(301),
        "smartSerial": 0,
        "lat": -37.7763789493616,
        "lng": 144.987143859677,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }, {
        "serial": String(302),
        "smartSerial": 0,
        "lat": -37.77937000599125,
        "lng": 144.98856006603685,
        "address": "",
        "capacity": 1,
        "is_smart": false,
        "threshold": 40,
        "fullness": 0.75
      }];
      var DUMMY_DEPOTS = [{
        "id": String(0),
        "lat": -37.834535,
        "lng": 144.986961,
        "address": "254 Domain Rd"
      }, {
        "id": String(1),
        "lat": -37.812121,
        "lng": 144.955997,
        "address": "295-307 William St"
      }, {
        "id": String(2),
        "lat": -37.812884,
        "lng": 144.970811,
        "address": "113 Exhibition St"
      }];
      var DUMMY_VEHICLES = [// Deleted to save space - no longer used, JSON fetches used instead
      ];
      var DUMMY_ROUTES = [// Deleted to save space - no longer used, JSON fetches used instead
      ];
      /***/
    },

    /***/
    "./src/app/route.ts":
    /*!**************************!*\
      !*** ./src/app/route.ts ***!
      \**************************/

    /*! exports provided: navToWaypoint */

    /***/
    function srcAppRouteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navToWaypoint", function () {
        return navToWaypoint;
      });
      /**
       * Route interfaces definition file
       *
       * The actual nature of these responses varies widely, though by centralising all definitions
       * to a single file like below, it is possible to perform refactoring without affecting the
       * entire codebase of the frontend.
       *
       * The format returned by the backend (following computation via OR tools), the format described in the
       * Google API specification, and the format that seems to actually be returned when calling the JS API
       * renderer all seem to be completely different. Efforts to convert or reformat these structures for
       * compatibility were largely unsuccessful, as can be seen in the commented-out code below.
       *
       * Combined with difficulties in feeding this data into either the vanilla JS endpoint or into the
       * encapsulated agm-directions injectable renderer, I ultimately opted to recalculate this data for use.
       * See the route display page for more information.
       *
       * Internal processes in frontend expect the regular Route type, though
       * due to frequent updates and uncertainty in the type of response the backend
       * may send, it may be necessary to maintain a separate interface for the actual response
       * format and conversion functions to go between the two formats.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Converts NavRoute to NavRouteWaypointed, for use with agm-directions renderer


      function navToWaypoint(nav) {
        /**
         * Method to convert regular navroute to one using google maps embedded datatype
         * @param {NavRoute} nav input navroute
         * @return {NavRouteWaypointed} mutated input containing google.maps.DirectionsWaypoint[] type
         */
        try {
          var waypointed = [];
          nav.visitingOrder.forEach(function (x) {
            return waypointed.push({
              location: new google.maps.LatLng({
                lat: x.latitude,
                lng: x.longitude
              }),
              stopover: true
            });
          });
          return {
            vehicle: nav.vehicle,
            waypoints: waypointed
          };
        } catch (err) {
          if (err.name == 'ReferenceError') {
            location.reload();
          } else {
            throw err;
          }
        }
      }
      /*
      // Struct for routes
      export interface NavRoute {
              geocoded_waypoints: {
                  geocoder_status: string,
                  place_id: string,
                  types: string[],
                  partial_match: boolean
              }[],
              routes: {
                  bounds: any,
                  legs: any,
                  overview_polyline: any
                  warnings: [],
                  waypoint_order: number[],
                  summary: string,
                  copyrights: string
              }[],
              status: string
      }
      
      export interface NavRouteResponse {
          binCollectionSchedules: {
              routes: {
                  directions: google.maps.DirectionsResult[],
                  vehicle: string
              }[],
              timestamp: Date
          }[],
          depots: DepotRaw[]
      }
      */

      /*
      export interface NavRouteResponse {
          routes: {
              directions: google.maps.DirectionsResult[]
              vehicle:    string
          }[],
          timestamp:  Date
      }*/

      /***/

    },

    /***/
    "./src/app/routefetcher.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/routefetcher.service.ts ***!
      \*****************************************/

    /*! exports provided: RoutefetcherService */

    /***/
    function srcAppRoutefetcherServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutefetcherService", function () {
        return RoutefetcherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _httpHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./httpHelpers */
      "./src/app/httpHelpers.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /**
       * Service that performs fetching of route data
       *
       * Note that due to difficulties in aligning the available gmaps responses
       * to that expected by the renderer, there have been a number of major modifications to the way
       * route data is sent by the backend and processed here in the frontend.
       * In particular, see the routeview ts file for info on how routes are currently
       * being processed and rendered.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // Service performs fetching of routes


      var RoutefetcherService = /*#__PURE__*/function () {
        function RoutefetcherService(http) {
          _classCallCheck(this, RoutefetcherService);

          this.http = http; // Use appropriate url based on environment variable

          this.routesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serviceFetcherModes == 0 ? 'data/routes' : 'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/routes4.json'; // fetchermode 1 will HTTP fetch from Github raw - see https://github.com/MolarFox/BinRouter_JSONTest*
          // Rudimentary cache

          this.routecache = undefined; // TODO: implement caching functionality
        } // Fetches the routes if not already cached, returns observable for HTTP response


        _createClass(RoutefetcherService, [{
          key: "getAllRoutes",
          value: function getAllRoutes() {
            /**
             * Gets all route data, sourced from method specified in environment variables
             * @return {Observable<NavRouteResponse>} Observable which resolves to the return data
             */
            if (this.routecache === undefined) {// not yet fetched, fetch it
            }

            return this.http.get(this.routesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
              console.log("Routes received:");
              console.log(x);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_httpHelpers__WEBPACK_IMPORTED_MODULE_3__["handleError"])('getAllRoutes')));
          }
        }]);

        return RoutefetcherService;
      }();

      RoutefetcherService.ɵfac = function RoutefetcherService_Factory(t) {
        return new (t || RoutefetcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      RoutefetcherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoutefetcherService,
        factory: RoutefetcherService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutefetcherService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/view-bins/view-bins.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/view-bins/view-bins.component.ts ***!
      \**************************************************/

    /*! exports provided: ViewBinsComponent */

    /***/
    function srcAppViewBinsViewBinsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewBinsComponent", function () {
        return ViewBinsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _binfetcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../binfetcher.service */
      "./src/app/binfetcher.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @agm/markerclusterer */
      "./node_modules/@agm/markerclusterer/__ivy_ngcc__/fesm2015/agm-markerclusterer.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /**
       * Bin view / editor ts file
       *
       * Handles all logic for the bin viewer and editor,
       * most importantly handles sending of requests to backend and
       * validation of these edits.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      function ViewBinsComponent_agm_marker_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markerClick", function ViewBinsComponent_agm_marker_3_Template_agm_marker_markerClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.clickedMarker(i_r4);
          })("dragEnd", function ViewBinsComponent_agm_marker_3_Template_agm_marker_dragEnd_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.draggedMarker(ctx_r7.Longitude);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bin_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", bin_r3[0].lat)("longitude", bin_r3[0].lng);
        }
      }

      function ViewBinsComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Longitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bin Capacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Litre(s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-progress-bar", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Smart Bin ID: ", ctx_r8.selbin[0].smartSerial, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.selbin[0].lat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.selbin[0].lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-autosize", true)("value", ctx_r8.selbin[0].address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.selbin[0].capacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r8.accent)("mode", ctx_r8.determinate)("value", ctx_r8.selbin[0].fullness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fullness: ", ctx_r8.selbin[0].fullness, "%");
        }
      }

      function ViewBinsComponent_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected Bin is not Smart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewBinsComponent_div_19_div_2_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.selbin[0].lat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Longitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewBinsComponent_div_19_div_2_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.selbin[0].lng = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewBinsComponent_div_19_div_2_Template_textarea_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.selbin[0].address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bin Capacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewBinsComponent_div_19_div_2_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.selbin[0].capacity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Litre(s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewBinsComponent_div_19_div_2_Template_mat_checkbox_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.picker_active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Pick New Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBinsComponent_div_19_div_2_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.binDelete(ctx_r16.selbin);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.selbin[0].lat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.selbin[0].lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-autosize", true)("ngModel", ctx_r9.selbin[0].address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.selbin[0].capacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.picker_active)("checked", ctx_r9.picker_active)("colour", ctx_r9.primary);
        }
      }

      function ViewBinsComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewBinsComponent_div_19_div_1_Template, 25, 10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewBinsComponent_div_19_div_2_Template, 26, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selbin[0].is_smart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selbin[0].is_smart);
        }
      }

      function ViewBinsComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pick a bin to begin editing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      } // Code for bin editor view


      var ViewBinsComponent = /*#__PURE__*/function () {
        function ViewBinsComponent(binfetcher, _snackBar) {
          _classCallCheck(this, ViewBinsComponent);

          this.binfetcher = binfetcher;
          this._snackBar = _snackBar; // Start coords and zoom for map - these coords are in the CBD

          this.start_lat = -37.8142588;
          this.start_lng = 144.9666622;
          this.start_zoom = 14; // Bin arrays and current bin selection

          this.all_bins = []; // Array of all bins

          this.orig_bins = []; // Unmodified array of all bins
          // Arrays to track modifications made during editing

          this.del_bins = []; // Array of dumb bins staged for deletion

          this.mod_bins = []; // Array of dumb bins to modify with new values

          this.add_bins = []; // Array of dumb bins to create
          // Editor vars

          this.subtitle = "Pick a bin to begin editing";
          this.picker_active = false;
        } // Retrieve and process bins into live storage once available


        _createClass(ViewBinsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            this.binfetcher.getAllBins().subscribe(function (bins_in) {
              return _this2.process_markers(bins_in);
            });
            console.log("Bin view loaded at time ".concat(new Date()));
          } // Set instance bins variable, convert all to markers and display
          // Note deep copy of full bin array stored into the reference / backup array

        }, {
          key: "process_markers",
          value: function process_markers(bins) {
            var _this3 = this;

            /**
             * Called after bins have been loaded
             * Processes the input bins and formats them for placement into the live and original
             * bin tracking arrays in the class
             * @param {Bin[]} bins Array of bins, raw response from the backend
             * @return {void}
             */
            this.orig_bins = JSON.parse(JSON.stringify(bins)); // deep copy

            bins.forEach(function (bin) {
              return _this3.all_bins.push([bin, {
                "draggable": false
              }]);
            });
          } // Handles clicks on the map

        }, {
          key: "mapClicked",
          value: function mapClicked(e) {
            /**
             * Called when the map is clicked anywhere
             * If the bin location picker is active, sets new location for the active bin
             * otherwise ignores the event
             * @param {{{number, number}}} e map click event, containing map coordinates of click
             * @return {void}
             */
            // Update selected bin location if picker enabled
            if (this.picker_active) {
              this.picker_active = false;
              this.selbin[0].lat = e.coords.lat;
              this.selbin[0].lng = e.coords.lng;
            }
          } // handles drag completions of marker

        }, {
          key: "draggedMarker",
          value: function draggedMarker(e) {
            /**
             * [nop adjacent] Handles end of a marker drag event
             * No longer does anything, see below for explanation and new method to update locations
             * @param e info about mouse drag event - does not contain map coords
             * @return {void}
             */
            // Does nothing anymore

            /**
             * Due to the way markers take input for their lat/lng,
             * it is not possible to do a 2-way bind, only a 1-way bind
             * Dragging a marker therefore cannot update the bin coords when using agm
             *
             * My fix for this is that the user can pick a point on the map to move the marker to,
             * and that will set the new coords. See below.
             */
          } // Handles clicks to a marker

        }, {
          key: "clickedMarker",
          value: function clickedMarker(index) {
            /**
             * Called whenever a marker is clicked
             * sets the clicked marker to be the active marker, and disable bin location picker
             * @param {number} index index of the marker clicked, corresponds to the bin array
             * @return {void}
             */
            this.selbin = this.all_bins[index]; // Make clicked bin the active bin

            this.picker_active = false; // Deactivate bin loc picker, if it was active
          } // triggered whenever user deletes a dumb bin from editor view

        }, {
          key: "binDelete",
          value: function binDelete(bindel) {
            {
              /**
               * Delete the specified bin - only gets tracked if the
               * deleted bin was a pre-exising one, not one newly added in this edit session
               * @param {[Bin, VehicleExtra]} bindel the specified bin to delete
               * @return {void}
               */
              // Add bin to deletion array if not a newly created and staged bin
              if (bindel[0].serial) this.del_bins.push(bindel[0].serial); // Remove bin from main arrays using splice

              var remindex = this.all_bins.findIndex(function (b) {
                return b[0].serial === bindel[0].serial && b[0].lat === bindel[0].lat && b[0].lng === bindel[0].lng;
              });
              this.all_bins.splice(remindex, 1);
              if (bindel[0].serial) this.orig_bins.splice(remindex, 1);else this.add_bins.splice(this.all_bins.findIndex(function (b) {
                return b[0].serial === bindel[0].serial && b[0].lat === bindel[0].lat && b[0].lng === bindel[0].lng;
              }), 1); // unset selected bin

              this.selbin = undefined;
            }
          } // triggered whenever user clicks 'new' on editor view

        }, {
          key: "binAdd",
          value: function binAdd() {
            /**
             * Create a new bin with starting coords in the CBD
             * Also track it in the new bins array for later posting of edits to backend
             * @return {void}
             */
            var newbin = [{
              "serial": undefined,
              "smartSerial": undefined,
              "lat": this.start_lat,
              "lng": this.start_lng,
              "address": "",
              "capacity": 100,
              "is_smart": false,
              "threshold": 0,
              "fullness": 0
            }, {
              "draggable": false
            }]; // Push bin to live and add array, set active, disable picker if it was active

            this.all_bins.push(newbin);
            this.add_bins.push(newbin[0]);
            this.selbin = this.all_bins[this.all_bins.length - 1];
            this.picker_active = false;
          } // Attempts to submit changes, flashes error message if server reports any fails

        }, {
          key: "submitChanges",
          value: function submitChanges() {
            var _this4 = this;

            /**
             * Determine which existing records have been modified, then send all three edit arrays to the
             * backend for validation and database update. Three arrays are additions, modifications, deletions
             * Prompts user with a snackbar on success or failure
             * @return {void}
             */
            this.findChanges(); // Pop a message and do nothing if nothing to submit

            if (this.mod_bins.length == 0 && this.add_bins.length == 0 && this.del_bins.length == 0) {
              this._snackBar.open("No changes to submit", "", {
                duration: 2000
              });

              return;
            } // Submit changes to backend, helper function will format the three passed arrays below


            this.binfetcher.submitChanges(this.add_bins, this.mod_bins, this.del_bins).subscribe(function (x) {
              console.log(x);
              console.log(x.status);

              if (x.status == 201) {
                _this4._snackBar.open("Edits were successfully received!", "", {
                  duration: 2000
                });

                setTimeout(function (_) {
                  return location.reload();
                }, 1900);
              } else if (x.status == 400) {
                _this4._snackBar.open("Some edits did not pass - changes were not saved", "", {
                  duration: 2000
                });
              } else {
                _this4._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {
                  duration: 2000
                });
              }
            }, function (y) {
              console.log(y);
              console.log(y.status);

              if (y.status == 201) {
                _this4._snackBar.open("Edits were successfully received!", "", {
                  duration: 2000
                });

                setTimeout(function (_) {
                  return location.reload();
                }, 1900);
              } else if (y.status == 400) {
                _this4._snackBar.open("Some edits did not pass - changes were not saved", "", {
                  duration: 2000
                });
              } else {
                _this4._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {
                  duration: 2000
                });
              }
            });
          } // Only calculated just before user submission of all edits
          // Checks live array with backup array to determine what changes were made

        }, {
          key: "findChanges",
          value: function findChanges() {
            var _this5 = this;

            /**
             * Determine any changes made to the original input array, vs the live array that is 2-way
             * bound to the visual editor, store them in the class variable for modifications
             * @return {void}
             */
            var keys = ["serial", "smartSerial", "lat", "lng", "address", "capacity", "is_smart", "threshold", "fullness"]; // Check which records vary, to add to mod array

            var _loop = function _loop(_i) {
              var changed = false;
              keys.forEach(function (key) {
                if (_this5.all_bins[_i][0][key] != _this5.orig_bins[_i][key]) {
                  if (!changed) {
                    changed = true;

                    _this5.mod_bins.push(_this5.all_bins[_i][0]);
                  }
                }
              });

              while (_this5.all_bins[_i][0]["is_smart"]) {
                _i++;
              }

              i = _i;
            };

            for (var i = 0; i < this.orig_bins.length; i++) {
              _loop(i);
            }
          }
        }]);

        return ViewBinsComponent;
      }();

      ViewBinsComponent.ɵfac = function ViewBinsComponent_Factory(t) {
        return new (t || ViewBinsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_binfetcher_service__WEBPACK_IMPORTED_MODULE_1__["BinfetcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      ViewBinsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewBinsComponent,
        selectors: [["app-view-bins"]],
        decls: 21,
        vars: 11,
        consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [3, "latitude", "longitude", "zoom", "mapClick"], [3, "imagePath", "averageCenter"], [3, "latitude", "longitude", "markerClick", "dragEnd", 4, "ngFor", "ngForOf"], [1, "editmenu"], ["mat-mini-fab", "", "color", "primary", 1, "submitbutton", 3, "click"], ["mat-mini-fab", "", "color", "accent", 1, "newbutton", 3, "click"], [4, "ngIf"], ["style", "position: relative; left: 16px;", 4, "ngIf"], [3, "latitude", "longitude", "markerClick", "dragEnd"], [2, "padding-left", "15px"], ["appearance", "outline"], ["matInput", "", "readonly", "true", 3, "value"], ["appearance", "fill"], ["matInput", "", "readonly", "true", 3, "mat-autosize", "value"], ["matInput", "", "type", "number", "readonly", "true", 3, "value"], ["matSuffix", ""], [1, "example-margin", 3, "color", "mode", "value"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", 3, "mat-autosize", "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "1", "max", "256", 3, "ngModel", "ngModelChange"], [3, "ngModel", "checked", "colour", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 1, "newbutton", 2, "right", "120px", 3, "click"], [2, "position", "relative", "left", "16px"]],
        template: function ViewBinsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function ViewBinsComponent_Template_agm_map_mapClick_1_listener($event) {
              return ctx.mapClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-marker-cluster", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewBinsComponent_agm_marker_3_Template, 1, 2, "agm-marker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBinsComponent_Template_button_click_6_listener() {
              return ctx.submitChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "done_all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBinsComponent_Template_button_click_9_listener() {
              return ctx.binAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bin Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewBinsComponent_div_19_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewBinsComponent_div_20_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.start_lat)("longitude", ctx.start_lng)("zoom", ctx.start_zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagePath", "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m")("averageCenter", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.all_bins);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.all_bins.length, " bin(s) - ", ctx.add_bins.length, " created, ", ctx.del_bins.length, " deleted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selbin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selbin);
          }
        },
        directives: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_4__["AgmMarkerCluster"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n    height: calc(100vh - 50px);\n    width: calc(100vw - 401px);\n    float: left;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: lighter;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    height: calc(100vh - 50px);\n    width: 400px;\n    position: fixed;\n}\n\nmat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\n    padding-left: 15px;\n}\n\nmat-progress-bar[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    width: 320px;\n}\n\n.editmenu[_ngcontent-%COMP%] {\n    height: calc(100vh - 50px);\n    width: 400px;\n    top: 0px;\n    float: right;\n    position: relative;\n    background-color: lightgrey;\n}\n\n.submitbutton[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 60px;\n}\n\n.newbutton[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 60px;\n    bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1iaW5zL3ZpZXctYmlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYmlucy92aWV3LWJpbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDAxcHgpO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5tYXQtZm9ybS1maWVsZCwgbWF0LWNoZWNrYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbm1hdC1wcm9ncmVzcy1iYXIge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB3aWR0aDogMzIwcHg7XG59XG5cbi5lZGl0bWVudSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuXG4uc3VibWl0YnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDYwcHg7XG59XG5cbi5uZXdidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNjBweDtcbiAgICBib3R0b206IDUwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewBinsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-bins',
            templateUrl: './view-bins.component.html',
            styleUrls: ['./view-bins.component.css']
          }]
        }], function () {
          return [{
            type: _binfetcher_service__WEBPACK_IMPORTED_MODULE_1__["BinfetcherService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/view-fleet/view-fleet.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/view-fleet/view-fleet.component.ts ***!
      \****************************************************/

    /*! exports provided: ViewFleetComponent, ViewFleetPopup */

    /***/
    function srcAppViewFleetViewFleetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewFleetComponent", function () {
        return ViewFleetComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewFleetPopup", function () {
        return ViewFleetPopup;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fleetfetcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../fleetfetcher.service */
      "./src/app/fleetfetcher.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view-routes/view-routes.component */
      "./src/app/view-routes/view-routes.component.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /**
       * Fleet view / editor ts file
       *
       * Handles all logic for the fleet viewer and editor,
       * most importantly handles sending of requests to backend and
       * validation of these edits.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      function ViewFleetComponent_mat_card_subtitle_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.all_fleet.length, " vehicle(s) - ", ctx_r0.add_vehicles.length, " created, ", ctx_r0.del_vehicles.length, " deleted ");
        }
      }

      function ViewFleetComponent_mat_card_subtitle_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No vehicles currently loaded ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(or all deleted) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewFleetComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_div_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.reloadPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click to Refresh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewFleetComponent_mat_list_item_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_mat_list_item_17_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var vehicle_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.vehicleClick(vehicle_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r8 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx_r3.primary)("disabled", vehicle_r8[1].selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.veh_icons[vehicle_r8[0].icon]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r8[0].rego);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cap: ", vehicle_r8[0].capacity, " ");
        }
      }

      function ViewFleetComponent_mat_card_title_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " view_carousel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No vehicle selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewFleetComponent_div_22_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var depot_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", depot_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", depot_r12.address, " ");
        }
      }

      function ViewFleetComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_div_22_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.selveh[0].icon = (ctx_r13.selveh[0].icon + 1) % 12;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "VIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewFleetComponent_div_22_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selveh[0].rego = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home depot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewFleetComponent_div_22_Template_mat_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.selveh[0].homeDepot = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewFleetComponent_div_22_mat_option_15_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "capacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewFleetComponent_div_22_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.selveh[0].capacity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slide-toggle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewFleetComponent_div_22_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.selveh[0].available = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_div_22_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.vehicleDelete(ctx_r19.selveh);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.veh_icons[ctx_r5.selveh[0].icon], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selveh[0].rego);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selveh[0].homeDepot);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.all_depots);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selveh[0].capacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.selveh[0].available);
        }
      }

      var ViewFleetComponent = /*#__PURE__*/function () {
        function ViewFleetComponent(fleetfetcher, dialog, _snackBar) {
          _classCallCheck(this, ViewFleetComponent);

          this.fleetfetcher = fleetfetcher;
          this.dialog = dialog;
          this._snackBar = _snackBar; // Array of icon names corresponding to the 12 possible icons
          // Each string corresponds to icon in material design library

          this.veh_icons = ["delete", "airport_shuttle", "local_shipping", "agriculture", "electric_car", "two_wheeler", "electric_bike", "pedal_bike", "directions_boat", "airplanemode_active", "rv_hookup", "biotech"];
          this.all_fleet = []; // Array of all vehicles

          this.orig_fleet = []; // Unmodified array of all vehicles

          this.del_vehicles = []; // Array of vehicles staged for deletion

          this.mod_vehicles = []; // Array of vehicles to modify with new values

          this.add_vehicles = []; // Array of vehicles to create
        } // Loads live array (data the editor sees), and deep copy into backup array
        // Modifications are determined by comparing live array with backup before edit submission


        _createClass(ViewFleetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            this.fleetfetcher.getAllFleet().subscribe(function (fleet_in) {
              return (// add all fetched fleet vehicles to array with a spot for their extra data
                fleet_in.forEach(function (v) {
                  _this6.all_fleet.push([JSON.parse(JSON.stringify(v)), {
                    "rego": v.rego,
                    "selected": false
                  }]); // add all vehicles to backup array


                  _this6.orig_fleet.push( // seperate push for more efficient deep copy
                  [v, {
                    "rego": v.rego,
                    "selected": false
                  }]);
                })
              );
            }); // Collect info about loc of all depots 
            // (since routing view is nested, this call with need no network action)

            this.fleetfetcher.getAllDepots().subscribe(function (depots_in) {
              return _this6.all_depots = depots_in;
            });
            console.log("Fleet view loaded at time ".concat(new Date()));
          } // Triggered whenever user clicks on a vehicle in list view

        }, {
          key: "vehicleClick",
          value: function vehicleClick(veh) {
            /**
             * Called whenever a vehicle is clicked in the RHS edit sidebar
             * Sets that vehicle to be the active vehicle, and updates the internal param
             * of it and the previously active vehicle as such (used by editor for button style rendering)
             */
            // Reset selection of previously selected vehicle
            if (this.selveh) {
              this.selveh[1].selected = false;
            } // Set new selected vehicle


            this.selveh = veh;
            this.selveh[1].selected = true;
          } // triggered whenever user clicks 'delete' on a given vehicle

        }, {
          key: "vehicleDelete",
          value: function vehicleDelete(veh) {
            /**
             * Delete the specified vehicle - only gets tracked if the
             * deleted vehicle was a pre-exising one, not one newly added in this edit session
             * @param {[Vehicle, VehicleExtra]} veh the specified vehicle to delete
             * @return {void}
             */
            // Is vehicle an exising one? (new vehicles will not have an id assigned)
            if (veh[0]._id) {
              // Add vehicle to the deletion array, if not a new vehicle
              this.del_vehicles.push(veh[0]._id);
            } // Remove vehicle from the main array


            var remindex = this.all_fleet.findIndex(function (v) {
              return v[0].rego === veh[0].rego;
            });
            this.all_fleet.splice(remindex, 1); // Remove from original fleet, to keep all pointers in sync

            if (veh[0]._id) this.orig_fleet.splice(remindex, 1); // Remove from new array
            else this.add_vehicles.splice(this.add_vehicles.findIndex(function (v) {
                return v.rego === veh[0].rego;
              }), 1); // Unset selected vehicle (or next in list)

            if (this.all_fleet.length < 1) this.selveh = undefined;else this.vehicleClick(this.all_fleet[Math.max(0, remindex - 1)]);
          } // triggered whenever user clicks 'new' from the editor view

        }, {
          key: "vehicleAdd",
          value: function vehicleAdd() {
            /**
             * Create a new vehicle with a random VIN, set it as the active vehicle
             * Also track it in the new vehicles array for later posting of edits to backend
             * @return {void}
             */
            var newrego = regoGen(6);
            var newveh = [{
              "_id": undefined,
              "rego": newrego,
              "capacity": 2000,
              "available": true,
              "icon": 2,
              "homeDepot": undefined
            }, {
              "rego": newrego,
              "selected": true
            }]; // Add vehicle to live view, to new vehicles array, and make it selected

            this.all_fleet.push(newveh);
            this.add_vehicles.push(newveh[0]);
            this.vehicleClick(newveh);
          } // Submits changes to the backend server, or notifies user of issues
          // THIS IS INCOMPLETE AND I'M NO LONGER USING IT, IN FAVOR OF SNACKBAR BELOW

        }, {
          key: "openDialogue",
          value: function openDialogue() {
            /**
             * [Depreciated] will open a dialogue popup
             * Intended as a structured method to show user the result of their most recent edit push
             * @return {void}
             */
            var dialogRef = this.dialog.open(ViewFleetPopup);
            var popupresult = undefined;
            dialogRef.afterClosed().subscribe(function (x) {
              return popupresult = x;
            });
          } // Validates all changes made thus far - true if all pass
          // This was not completed as it is low priority, already have validation on the backend
          // Ideally should be implemented if time permits

        }, {
          key: "validateChanges",
          value: function validateChanges() {
            /**
             * [NOT IMPLEMENTED] A function to validate all proposed edits before sending them to the backend
             * This was deemed low priority as we already had validation on backend working ahead of time,
             * and are instead relying on the backend response header to determine if edits are valid.
             * @return {ChkFail[]} return array of validation issues found - empty if none
             */
            return [];
          } // Attempts to submit changes, flashes error message if server reports any fails

        }, {
          key: "submitChanges",
          value: function submitChanges() {
            var _this7 = this;

            /**
             * Determine which existing records have been modified, then send all three edit arrays to the
             * backend for validation and database update. Three arrays are additions, modifications, deletions
             * Prompts user with a snackbar on success or failure
             * @return {void}
             */
            this.findChanges(); // Pop a message and do nothing if nothing to submit

            if (this.mod_vehicles.length == 0 && this.add_vehicles.length == 0 && this.del_vehicles.length == 0) {
              this._snackBar.open("No changes to submit", "", {
                duration: 2000
              });

              return;
            } // Submit the changes via the 3 modification types, arrays passed below


            this.fleetfetcher.submitChanges(this.add_vehicles, this.mod_vehicles, this.del_vehicles).subscribe( // Pop a snackbar on success
            function (x) {
              console.log(x);
              console.log(x.status);

              if (x.status == 201) {
                _this7._snackBar.open("Edits were successfully received!", "", {
                  duration: 2000
                });

                setTimeout(function (_) {
                  return location.reload();
                }, 1900);
              } else if (x.status == 400) {
                _this7._snackBar.open("Some edits did not pass - changes were not saved", "", {
                  duration: 2000
                });
              } else {
                _this7._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {
                  duration: 2000
                });
              }
            }, // Pop a snackbar on failure
            function (y) {
              console.log(y);
              console.log(y.status);

              if (y.status == 201) {
                _this7._snackBar.open("Edits were successfully received!", "", {
                  duration: 2000
                });

                setTimeout(function (_) {
                  return location.reload();
                }, 1900);
              } else if (y.status == 400) {
                _this7._snackBar.open("Some edits did not pass - changes were not saved", "", {
                  duration: 2000
                });
              } else {
                _this7._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {
                  duration: 2000
                });
              }
            });
          } // Only calculated just before user submission of all edits
          // Compares live array with original array to determine what edits were made

        }, {
          key: "findChanges",
          value: function findChanges() {
            var _this8 = this;

            /**
             * Determine any changes made to the original input array, vs the live array that is 2-way
             * bound to the visual editor, store them in the class variable for modifications
             * @return {void}
             */
            var keys = ["_id", "rego", "capacity", "available", "icon", "homeDepot"]; // Check which records vary, to add to mod array

            var _loop2 = function _loop2(_i2) {
              var changed = false;
              keys.forEach(function (key) {
                if (_this8.all_fleet[_i2][0][key] != _this8.orig_fleet[_i2][0][key]) if (!changed) {
                  changed = true;

                  _this8.mod_vehicles.push(_this8.all_fleet[_i2][0]);
                }
              });
            };

            for (var _i2 = 0; _i2 < this.orig_fleet.length; _i2++) {
              _loop2(_i2);
            }
          } // Reloads the page

        }, {
          key: "reloadPage",
          value: function reloadPage() {
            /**
             * Reloads the page using reload - called in some HTML loopbacks
             * @return {void}
             */
            location.reload();
          }
        }]);

        return ViewFleetComponent;
      }();

      ViewFleetComponent.ɵfac = function ViewFleetComponent_Factory(t) {
        return new (t || ViewFleetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fleetfetcher_service__WEBPACK_IMPORTED_MODULE_1__["FleetfetcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      ViewFleetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewFleetComponent,
        selectors: [["app-view-fleet"]],
        decls: 23,
        vars: 8,
        consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [3, "selvehid", "showselector"], [1, "editmenu"], [1, "editmenu_card"], ["mat-mini-fab", "", "color", "primary", 1, "submitbutton", 3, "click"], ["mat-mini-fab", "", "color", "accent", 2, "position", "absolute", "bottom", "50px", "right", "60px", 3, "click"], [4, "ngIf"], [1, "vehiclelist"], ["matRipple", "", "style", "cursor: pointer;", 3, "matRippleColor", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "infobar"], [1, "infobar_card"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["matRipple", "", 2, "cursor", "pointer", 3, "matRippleColor", "disabled", "click"], [2, "padding-left", "4px"], ["mat-line", ""], [1, "regotxt"], [2, "top", "4px", "position", "relative"], [1, "infobar1"], [2, "overflow", "visible"], ["unselectable", "on", "onselectstart", "return false;", "onselectstart", "return false;", "onmousedown", "return false;", 1, "clicktext", 3, "click"], ["appearance", "fill", 1, "regotxt_main"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "infobar2"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-left", "20px"], ["matInput", "", "type", "number", "min", "0", "max", "999999999", "step", "5", 3, "ngModel", "ngModelChange"], ["color", "primary", 2, "padding-left", "20px", "bottom", "4px", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", 2, "bottom", "6px", "left", "20px", 3, "click"], [3, "value"]],
        template: function ViewFleetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-view-routes", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_Template_button_click_4_listener() {
              return ctx.submitChanges();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "done_all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewFleetComponent_Template_button_click_7_listener() {
              return ctx.vehicleAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fleet Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewFleetComponent_mat_card_subtitle_13_Template, 2, 3, "mat-card-subtitle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewFleetComponent_mat_card_subtitle_14_Template, 4, 0, "mat-card-subtitle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewFleetComponent_div_16_Template, 3, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ViewFleetComponent_mat_list_item_17_Template, 9, 5, "mat-list-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewFleetComponent_mat_card_title_21_Template, 4, 0, "mat-card-title", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewFleetComponent_div_22_Template, 24, 6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selvehid", ctx.selveh != undefined ? ctx.selveh[0]._id : undefined)("showselector", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.all_fleet.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.all_fleet.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.all_fleet.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.all_fleet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selveh);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selveh);
          }
        },
        directives: [_view_routes_view_routes_component__WEBPACK_IMPORTED_MODULE_4__["ViewRoutesComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap');\r\n\r\napp-view-routes[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 65px);\r\n    width: calc(100vw - 401px);\r\n    float: left;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.vehiclelist[_ngcontent-%COMP%] {\r\n    max-height: calc(100vh - 132px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-top: 0%;\r\n    top: 0;\r\n}\r\n\r\n.editmenu[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 50px);\r\n    width: 400px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    position: fixed;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.editmenu_card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 400px;\r\n}\r\n\r\n.infobar[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    width: calc(100vw - 401px);\r\n    position: fixed;\r\n    bottom: 0px;\r\n    overflow: hidden;\r\n}\r\n\r\n.infobar_card[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    min-width: 900px;\r\n}\r\n\r\n.infobar1[_ngcontent-%COMP%] {\r\n    float: left; \r\n    width: 250px;\r\n    position: relative;\r\n    bottom: 12px;\r\n}\r\n\r\n.infobar2[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    float: left;\r\n    bottom: 8px;\r\n}\r\n\r\n.regotxt[_ngcontent-%COMP%] {\r\n    font-family: 'DM Mono';\r\n}\r\n\r\n.regotxt_main[_ngcontent-%COMP%] {\r\n    font-family: 'DM Mono';\r\n    font-size: medium;\r\n    position: relative;\r\n    left: 8px;\r\n}\r\n\r\n.submitbutton[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 60px;\r\n}\r\n\r\n.clicktext[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    -moz-user-select: none; \r\n    -webkit-user-select: none; \r\n    -ms-user-select:none; \r\n    user-select:none;\r\n    -o-user-select:none;\r\n    cursor: pointer;\r\n    scale: 2;\r\n    right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1mbGVldC92aWV3LWZsZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGOztBQUVyRjtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE1BQU07QUFDVjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3LWZsZWV0L3ZpZXctZmxlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK01vbm86d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5hcHAtdmlldy1yb3V0ZXMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQwMXB4KTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udmVoaWNsZWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzMnB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmVkaXRtZW51IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4uZWRpdG1lbnVfY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5pbmZvYmFyIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDAxcHgpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5mb2Jhcl9jYXJkIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG1pbi13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5pbmZvYmFyMSB7XHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5pbmZvYmFyMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3R0b206IDhweDtcclxufVxyXG5cclxuLnJlZ290eHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBNb25vJztcclxufVxyXG5cclxuLnJlZ290eHRfbWFpbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0RNIE1vbm8nO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zdWJtaXRidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jbGlja3RleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyBcclxuICAgIC1tcy11c2VyLXNlbGVjdDpub25lOyBcclxuICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAtby11c2VyLXNlbGVjdDpub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgc2NhbGU6IDI7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewFleetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-fleet',
            templateUrl: './view-fleet.component.html',
            styleUrls: ['./view-fleet.component.css']
          }]
        }], function () {
          return [{
            type: _fleetfetcher_service__WEBPACK_IMPORTED_MODULE_1__["FleetfetcherService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })(); // This export is the dialog box that pops to verify user changes
      // No longer in use as not completed - dormant component and class declaration


      var ViewFleetPopup = function ViewFleetPopup() {
        _classCallCheck(this, ViewFleetPopup);
      };

      ViewFleetPopup.ɵfac = function ViewFleetPopup_Factory(t) {
        return new (t || ViewFleetPopup)();
      };

      ViewFleetPopup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewFleetPopup,
        selectors: [["view-fleet-popup"]],
        inputs: {
          chk_result: "chk_result"
        },
        decls: 0,
        vars: 0,
        template: function ViewFleetPopup_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewFleetPopup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: './view-fleet-popup',
            templateUrl: './view-fleet-popup.html'
          }]
        }], null, {
          chk_result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })(); // Adapted from https://stackoverflow.com/a/1349426
      // Generates a random rego for use in newly created rego records


      function regoGen(length) {
        /**
         * Generates a random n letter VIN registration, for use as a placeholder
         * @param {number} length length of the string to return
         * @returns {string} string of desired length containing only numbers and upper-case alpha-glyphs
         */
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      /***/

    },

    /***/
    "./src/app/view-heatmap/view-heatmap.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/view-heatmap/view-heatmap.component.ts ***!
      \********************************************************/

    /*! exports provided: ViewHeatmapComponent */

    /***/
    function srcAppViewHeatmapViewHeatmapComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewHeatmapComponent", function () {
        return ViewHeatmapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _binfetcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../binfetcher.service */
      "./src/app/binfetcher.service.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /**
       * Heatmap view ts file
       *
       * Handles all logic for heatmap, including loading of bin data,
       * initalisation of map and timely rendering of heatmap itself once all
       * components are loaded.
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */


      var ViewHeatmapComponent = /*#__PURE__*/function () {
        function ViewHeatmapComponent(binfetcher) {
          _classCallCheck(this, ViewHeatmapComponent);

          this.binfetcher = binfetcher; // Legacy - used for vanilla gmaps JS api hook

          this.map = null;
          this.heatmap = null;
          this.mapOrPointsLoaded = false; // true if at least one has loaded
          // Default centre point and zoom of mapview

          this.start_lat = -37.8142588;
          this.start_lng = 144.9666622;
          this.start_zoom = 14;
          this.all_bins = []; //datapoints: google.maps.LatLng[] = []; 

          this.datapoints = []; // for mixed / weighted dataset (exact format keeps changing on backend)
        } // Process and store bins when ready


        _createClass(ViewHeatmapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            this.binfetcher.getAllBins().subscribe(function (bins_in) {
              return _this9.process_markers(bins_in);
            });
            console.log("Heatmap view loaded at time ".concat(new Date()));
          } // Renders the heatmap - only runs once heatmap is loaded

        }, {
          key: "onMapLoad",
          value: function onMapLoad(mapInstance) {
            /**
             * Called once the map has loaded
             * Sets the map instance and calls the heatmap renderer method
             */
            this.map = mapInstance;
            this.renderHeatmap();
          } // Set instance bins variable, convert all to markers and display

        }, {
          key: "process_markers",
          value: function process_markers(bins) {
            var _this10 = this;

            /**
             * Process the raw bin response from backend into the format used by the
             * map renderer - involves using a google maps LatLng type
             * @param {Bin[]} bins array of raw bins
             * @return {void}
             */
            try {
              this.all_bins = bins;
              bins.forEach(function (bin) {
                return _this10.datapoints.push({
                  location: new google.maps.LatLng(bin.lat, bin.lng),
                  weight: 30
                });
              });
              this.renderHeatmap();
            } catch (err) {
              if (err.name == 'ReferenceError') {
                location.reload();
              } else {
                throw err;
              }
            }
          } // Render heatmap (to be called after map loaded)
          // Uses bins and associated fullness levels to determine point weights

        }, {
          key: "renderHeatmap",
          value: function renderHeatmap() {
            /**
             * Should only be called once the map has loaded and bin data is ready
             * Renders the heatmap on the targeted agm-maps map instance using bin data
             * @return {void}
             */
            this.heatmap = new google.maps.visualization.HeatmapLayer({
              map: this.map,
              data: this.datapoints,
              radius: 25
            });
          }
        }]);

        return ViewHeatmapComponent;
      }();

      ViewHeatmapComponent.ɵfac = function ViewHeatmapComponent_Factory(t) {
        return new (t || ViewHeatmapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_binfetcher_service__WEBPACK_IMPORTED_MODULE_1__["BinfetcherService"]));
      };

      ViewHeatmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewHeatmapComponent,
        selectors: [["app-view-heatmap"]],
        decls: 1,
        vars: 3,
        consts: [[3, "latitude", "longitude", "zoom", "mapReady"]],
        template: function ViewHeatmapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-map", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapReady", function ViewHeatmapComponent_Template_agm_map_mapReady_0_listener($event) {
              return ctx.onMapLoad($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.start_lat)("longitude", ctx.start_lng)("zoom", ctx.start_zoom);
          }
        },
        directives: [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n    height: calc(100vh - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1oZWF0bWFwL3ZpZXctaGVhdG1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvdmlldy1oZWF0bWFwL3ZpZXctaGVhdG1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewHeatmapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-heatmap',
            templateUrl: './view-heatmap.component.html',
            styleUrls: ['./view-heatmap.component.css']
          }]
        }], function () {
          return [{
            type: _binfetcher_service__WEBPACK_IMPORTED_MODULE_1__["BinfetcherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/view-routes/view-routes.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/view-routes/view-routes.component.ts ***!
      \******************************************************/

    /*! exports provided: ViewRoutesComponent */

    /***/
    function srcAppViewRoutesViewRoutesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewRoutesComponent", function () {
        return ViewRoutesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../route */
      "./src/app/route.ts");
      /* harmony import */


      var _routefetcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../routefetcher.service */
      "./src/app/routefetcher.service.ts");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var agm_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! agm-direction */
      "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function ViewRoutesComponent_div_2_div_1_div_1_agm_direction_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-direction", 6);
        }

        if (rf & 2) {
          var routeset_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("origin", routeset_r5.start)("destination", routeset_r5.end)("waypoints", routeset_r5.waypoints);
        }
      }

      function ViewRoutesComponent_div_2_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewRoutesComponent_div_2_div_1_div_1_agm_direction_1_Template, 1, 3, "agm-direction", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var routeset_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selvehid == undefined || ctx_r4.selvehid == routeset_r5.vehicle_id);
        }
      }

      function ViewRoutesComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewRoutesComponent_div_2_div_1_div_1_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var veh_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", veh_r3.arr);
        }
      }

      function ViewRoutesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewRoutesComponent_div_2_div_1_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.render_waypoints);
        }
      }

      function ViewRoutesComponent_mat_form_field_3_mat_select_3_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var veh_r11 = ctx.$implicit;
          var j_r12 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", veh_r11.arr[0].vehicle_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", j_r12, " ");
        }
      }

      function ViewRoutesComponent_mat_form_field_3_mat_select_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewRoutesComponent_mat_form_field_3_mat_select_3_Template_mat_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.selvehid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewRoutesComponent_mat_form_field_3_mat_select_3_mat_option_1_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.selvehid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.render_waypoints);
        }
      }

      var _c0 = function _c0() {
        return [];
      };

      function ViewRoutesComponent_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "selected vehicle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewRoutesComponent_mat_form_field_3_mat_select_3_Template, 2, 2, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.render_waypoints != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      } // This is the code for bin viewer / editor view


      var ViewRoutesComponent = /*#__PURE__*/function () {
        function ViewRoutesComponent(routefetcher) {
          _classCallCheck(this, ViewRoutesComponent);

          this.routefetcher = routefetcher;
          this.selvehid = undefined; // Currently selected vehicle - only shows routes for this vehicle

          this.showselector = true; // Hides selector if true (for use as an embed in fleetview page)

          this.map = null;
          this.waypoints = []; // Raw list of all waypoints, sorted by vehicle
          // Contains nicely formatted object for each chunk of each route
          // start and end points are of type lat/lon, waypoints are gmaps type as per method spec

          this.render_waypoints = []; // Initial params of the map (typically overwritten once routes are rendered)

          this.start_lat = -37.8142588;
          this.start_lng = 144.9666622;
          this.start_zoom = 14; // Known stable origin and destination for use in testing

          this.origin = {
            lat: -37.907803,
            lng: 145.133957
          };
          this.destination = {
            lat: -37.8997609,
            lng: 145.1292176
          };
          this.displayDirections = true; // Legacy param for use in directions API hook
        } // On init, perform some actions - format waypoint data and prime map for usage


        _createClass(ViewRoutesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            /**
             * Called when the page has initialised fully
             * @return {null}
             */
            // Subscribe to observable containing HTTP raw response from backend
            // Will save the response and format it before sending to the renderer
            this.routefetcher.getAllRoutes().subscribe(function (routes_in) {
              _this11.all_routes = routes_in;
              routes_in.binCollectionSchedules.forEach(function (r) {
                return r.routes.forEach(function (p) {
                  return _this11.waypoints.push(Object(_route__WEBPACK_IMPORTED_MODULE_1__["navToWaypoint"])(p));
                });
              }); //console.log(this.all_routes)
              // Formatting functions, happens after all the waypoints are received

              _this11.waypoints.forEach(function (w) {
                // Get target array
                var index = _this11.render_waypoints.find(function (x) {
                  return x.veh === w.vehicle;
                });

                if (!index) {
                  _this11.render_waypoints.push({
                    "veh": w.vehicle,
                    "arr": []
                  });

                  index = _this11.render_waypoints.length - 1;
                } // Chunk the waypoints into groups of 15 max points


                while (w.waypoints.length > 0) {
                  var newchunk = w.waypoints.splice(0, 24);

                  _this11.render_waypoints[index].arr.push(newchunk);
                } // Partition into start, end, waypoints, for use by renderer


                for (var p = 0; p < _this11.render_waypoints[index].arr.length; p++) {
                  var starttemp = void 0;
                  var endtemp = void 0;
                  var waypointtemp = _this11.render_waypoints[index].arr[p];

                  if (waypointtemp.length === 1) {
                    starttemp = waypointtemp[0];
                    endtemp = waypointtemp[0];
                    waypointtemp = [];
                  } else {
                    starttemp = waypointtemp.splice(0, 1); // Is final leg?

                    if (p == _this11.render_waypoints[index].arr.length - 1) {
                      endtemp = waypointtemp.splice(waypointtemp.length - 1, 1)[0];
                    } else {
                      endtemp = JSON.parse(JSON.stringify(_this11.render_waypoints[index].arr[p + 1][0]));
                    }
                  } // This is the format that the renderer sees for each leg of the route of each vehicle


                  _this11.render_waypoints[index].arr[p] = {
                    "start": starttemp.location ? starttemp.location : starttemp[0].location,
                    "end": endtemp.location ? endtemp.location : endtemp[0].location,
                    "waypoints": waypointtemp,
                    "vehicle_id": w.vehicle
                  };
                }
              }); // Legacy - init the vanilla JS renderer hook if in use (now using agm renderer instead)


              if (_this11.map !== null) _this11.setupRenderer();
            });
            console.log("Routing view loaded at time ".concat(new Date()));
          } // Handles clicks on the map

        }, {
          key: "mapClicked",
          value: function mapClicked(e) {
            /**
             * Called whenever the map is clicked
             * Prints a log of all routes and parsed waypoints to console, for debug purposes
             * Input is not utilised in latest build
             * @param e event object, containing lat lng coordinates of the map location clicked
             */
            console.log(this.all_routes);
            console.log(this.waypoints);
          } // Gains pointer to the map instance once it loads, using agm event

        }, {
          key: "onMapLoad",
          value: function onMapLoad(mapInstance) {
            /**
             * Called when the agm-map instance is finished loading
             * Informs the ts file of the map instance, and starts the renderer if bins have also been loaded [old]
             * @param {google.maps.Map} map the map object that completed loading (should only be 1)
             * @return {null}
             */
            this.map = mapInstance;
            if (this.all_routes) this.setupRenderer();
          } // Will initialise the renderer with the map instance and begin drawing
          // Some of the code below can also perform raw requests from gmaps API, used for debugging only
          // The format expected by the vanilla renderer, gmaps api spec, and backend response being sent through all differ
          // ... it's a mess, but the code is clean. See the type definition file for more details on these format discrepancies

        }, {
          key: "setupRenderer",
          value: function setupRenderer() {
            /**
             * [Depreciated] Method to initialise the renderer to begin passing routes to render
             * No longer in use, now using agm-directions instead. Method is nop adjacent.
             * @return {null}
             */

            /*
            console.log(this.all_routes)
            this.directionsRenderer = new google.maps.DirectionsRenderer();
            this.directionsService = new google.maps.DirectionsService();
            this.directionsRenderer.setMap(this.map);
            */

            /*
            // This will generate a new request and log acceptable response
            this.directionsService.route(
              {
                origin: new google.maps.LatLng(37.7699298, -122.4469157),
                destination: new google.maps.LatLng(37.7683909618184, -122.51089453697205),
                travelMode: google.maps.TravelMode["DRIVING"]
              }, (resp, status) => {
              if (status == 'OK'){
                console.log("asdf")
                console.log(resp)
                this.directionsRenderer.setDirections(resp);
              }
            }
            )
            */

            /*
            // This will use the first route of first vehicle read in from backend
            this.directionsRenderer.setDirections(
              this.all_routes.binCollectionSchedules[0].routes[0].directions[0]
            );
            */
          }
        }]);

        return ViewRoutesComponent;
      }();

      ViewRoutesComponent.ɵfac = function ViewRoutesComponent_Factory(t) {
        return new (t || ViewRoutesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_routefetcher_service__WEBPACK_IMPORTED_MODULE_2__["RoutefetcherService"]));
      };

      ViewRoutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewRoutesComponent,
        selectors: [["app-view-routes"]],
        inputs: {
          selvehid: "selvehid",
          showselector: "showselector"
        },
        decls: 4,
        vars: 5,
        consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [3, "latitude", "longitude", "zoom", "mapClick", "mapReady"], [4, "ngIf"], ["appearance", "fill", "style", "position: absolute; right: 25px; top: 75px; background-color: whitesmoke;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "origin", "destination", "waypoints", 4, "ngIf"], [3, "origin", "destination", "waypoints"], ["appearance", "fill", 2, "position", "absolute", "right", "25px", "top", "75px", "background-color", "whitesmoke"], ["name", "Sel_veh_selector", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "Sel_veh_selector", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function ViewRoutesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-map", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function ViewRoutesComponent_Template_agm_map_mapClick_1_listener($event) {
              return ctx.mapClicked($event);
            })("mapReady", function ViewRoutesComponent_Template_agm_map_mapReady_1_listener($event) {
              return ctx.onMapLoad($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewRoutesComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewRoutesComponent_mat_form_field_3_Template, 4, 2, "mat-form-field", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.start_lat)("longitude", ctx.start_lng)("zoom", ctx.start_zoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waypoints.length > 0 && ctx.map);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showselector);
          }
        },
        directives: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirection"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n    height: calc(100% - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1yb3V0ZXMvdmlldy1yb3V0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcm91dGVzL3ZpZXctcm91dGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRoutesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-routes',
            templateUrl: './view-routes.component.html',
            styleUrls: ['./view-routes.component.css']
          }]
        }], function () {
          return [{
            type: _routefetcher_service__WEBPACK_IMPORTED_MODULE_2__["RoutefetcherService"]
          }];
        }, {
          selvehid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showselector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /**
       * Definition of environment variables - this is the default definition file used during building,
       * and should be treated as the one targeted by development builds (such as the GH Pages build)
       *
       * Servicefetcher mode should be 1 or 2 (eg: not expecting an actual backend to query from)
       *
       * Author name:   Rithesh R Jayaram "MolarFox"
       * Student ID:    29687284
       * Last modified: 24-10-2020
       */
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // Service fetcher mode is used by services to determine how they should source data to serve requests
        serviceFetcherModes: 1 // 0 = fetch from actual server, 1 = fetch from github, 2 = use static dummy data

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Users\molar\OneDrive - Monash University\Projects\BinRouter\Frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map