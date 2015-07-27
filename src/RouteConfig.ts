module JustinCredible.SmartHomeMobile {

    /**
     * Used to define all of the client-side routes for the application.
     * This maps routes to the controller/view that should be used.
     */
    export class RouteConfig {

        public static setupRoutes($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {

            // Setup an abstract state for the tabs directive.
            $stateProvider.state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "templates/Root.html",
                controller: Controllers.RootController.ID
            });

            // An blank view useful as a place holder etc.
            $stateProvider.state("app.blank", {
                url: "/blank",
                views: {
                    "root-view": {
                        templateUrl: "templates/Blank.html"
                    }
                }
            });

            //#region Main Application Areas

            $stateProvider.state("app.security", {
                url: "/security",
                views: {
                    "root-view": {
                        templateUrl: "templates/Security.html",
                        controller: Controllers.SecurityController.ID
                    }
                }
            });

            $stateProvider.state("app.thermostat", {
                url: "/thermostat",
                views: {
                    "root-view": {
                        templateUrl: "templates/Thermostat.html",
                        controller: Controllers.ThermostatController.ID
                    }
                }
            });

            $stateProvider.state("app.smart-plugs", {
                url: "/smart-plugs",
                views: {
                    "root-view": {
                        templateUrl: "templates/Smart-Plugs.html",
                        controller: Controllers.SmartPlugsController.ID
                    }
                }
            });

            $stateProvider.state("app.cameras", {
                url: "/cameras",
                views: {
                    "root-view": {
                        templateUrl: "templates/Cameras.html",
                        controller: Controllers.CamerasController.ID
                    }
                }
            });

            $stateProvider.state("app.camera", {
                url: "/camera/:id",
                views: {
                    "root-view": {
                        templateUrl: "templates/Camera-View.html",
                        controller: Controllers.CameraViewController.ID
                    }
                }
            });

            /*
            $stateProvider.state("app.irrigation", {
                url: "/irrigation",
                views: {
                    "root-view": {
                        templateUrl: "templates/Irrigation.html",
                        controller: Controllers.IrrigationController.ID
                    }
                }
            });
            */

            $stateProvider.state("app.devices-list", {
                url: "/devices/list",
                views: {
                    "root-view": {
                        templateUrl: "templates/Devices/Devices-List.html",
                        controller: Controllers.DevicesListController.ID
                    }
                }
            });

            $stateProvider.state("app.devices-hub-info", {
                url: "/devices/hub",
                views: {
                    "root-view": {
                        templateUrl: "templates/Devices/Devices-Hub-Info.html",
                        controller: Controllers.DevicesHubInfoController.ID
                    }
                }
            });

            $stateProvider.state("app.devices-info", {
                url: "/devices/info/:deviceId",
                views: {
                    "root-view": {
                        templateUrl: "templates/Devices/Devices-Info.html",
                        controller: Controllers.DevicesInfoController.ID
                    }
                }
            });

            //#endregion

            //#region Settings

            $stateProvider.state("app.settings-list", {
                url: "/settings/list",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Settings-List.html",
                        controller: Controllers.SettingsListController.ID
                    }
                }
            });

            $stateProvider.state("app.hub", {
                url: "/settings/hub",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Hub.html",
                        controller: Controllers.HubController.ID
                    }
                }
            });

            $stateProvider.state("app.cameras-list", {
                url: "/settings/cameras",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Cameras-List.html",
                        controller: Controllers.CamerasListController.ID
                    }
                }
            });

            $stateProvider.state("app.camera-add", {
                url: "/settings/camera/add",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Camera-Edit.html",
                        controller: Controllers.CameraEditController.ID
                    }
                }
            });

            $stateProvider.state("app.camera-edit", {
                url: "/settings/camera/edit/:id",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Camera-Edit.html",
                        controller: Controllers.CameraEditController.ID
                    }
                }
            });

            $stateProvider.state("app.configure-pin", {
                url: "/settings/configure-pin",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Configure-Pin.html",
                        controller: Controllers.ConfigurePinController.ID
                    }
                }
            });

            $stateProvider.state("app.configure-passphrase", {
                url: "/settings/configure-passphrase",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Configure-Passphrase.html",
                        controller: Controllers.ConfigurePassphraseController.ID
                    }
                }
            });

            $stateProvider.state("app.developer", {
                url: "/settings/developer",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Developer.html",
                        controller: Controllers.DeveloperController.ID
                    }
                }
            });

            $stateProvider.state("app.logs", {
                url: "/settings/logs",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Logs.html",
                        controller: Controllers.LogsController.ID
                    }
                }
            });

            $stateProvider.state("app.log-entry", {
                url: "/settings/log-entry/:id",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/Log-Entry.html",
                        controller: Controllers.LogEntryController.ID
                    }
                }
            });

            $stateProvider.state("app.about", {
                url: "/settings/about",
                views: {
                    "root-view": {
                        templateUrl: "templates/Settings/About.html",
                        controller: Controllers.AboutController.ID
                    }
                }
            });

            //#endregion


            // If none of the above states are matched, use the blank route.
            $urlRouterProvider.otherwise("/app/blank");
        }
    }
}
