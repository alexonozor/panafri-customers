"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var services_routing_1 = require("./services.routing");
var services_component_1 = require("./listings/services.component");
var services_service_1 = require("./shared/services.service");
var http_1 = require("@angular/http");
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                services_routing_1.ServiceRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            declarations: [
                services_component_1.ServicesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [services_service_1.ServicesService]
        })
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELHNEQUF1RTtBQUN2RSx1REFBMEQ7QUFDMUQsb0VBQWtFO0FBRWxFLDhEQUE0RDtBQUM1RCxzQ0FBMkM7QUFpQjNDO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBZDFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQkFBVTtnQkFDVix1Q0FBb0I7Z0JBQ3BCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUMvQixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTZXJ2aWNlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlcnZpY2VzLnJvdXRpbmdcIjtcbmltcG9ydCB7IFNlcnZpY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGluZ3Mvc2VydmljZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJvdXNlbERpcmVjdGl2ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmcyLWNhcm91c2VsL25hdGl2ZXNjcmlwdC1uZzItY2Fyb3VzZWxcIjtcbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBTZXJ2aWNlUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2VydmljZXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbU2VydmljZXNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7IH0iXX0=