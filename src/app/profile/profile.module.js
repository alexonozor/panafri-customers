"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var profile_routing_1 = require("./profile.routing");
var profile_component_1 = require("./profile.component");
var profile_service_1 = require("./shared/profile.service");
var http_1 = require("@angular/http");
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                profile_routing_1.ProfileRoutingModule,
                common_1.NativeScriptCommonModule,
                http_1.HttpModule
            ],
            declarations: [
                profile_component_1.ProfileComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [profile_service_1.ProfileService]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUscURBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCw0REFBMEQ7QUFDMUQsc0NBQTJDO0FBaUIzQztJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWZ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsc0NBQW9CO2dCQUNwQixpQ0FBd0I7Z0JBQ3hCLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBRW5CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBQcm9maWxlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3Byb2ZpbGUucm91dGluZ1wiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUHJvZmlsZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgICBcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVNb2R1bGUgeyB9XG4iXX0=