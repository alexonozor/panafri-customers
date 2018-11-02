"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var notification_routing_1 = require("./notification.routing");
var notifications_service_1 = require("./shared/notifications.service");
var notifications_component_1 = require("./notifications.component");
var http_1 = require("@angular/http");
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        core_1.NgModule({
            imports: [
                notification_routing_1.NotificationsRoutingModule,
                common_1.NativeScriptCommonModule,
                http_1.HttpModule
            ],
            declarations: [
                notifications_component_1.NotificationsComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [notifications_service_1.NotificationsService]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUsK0RBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxxRUFBbUU7QUFDbkUsc0NBQTJDO0FBaUIzQztJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBZC9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpREFBMEI7Z0JBQzFCLGlDQUF3QjtnQkFDeEIsaUJBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDVixnREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7U0FDcEMsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL25vdGlmaWNhdGlvbi5yb3V0aW5nXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9ub3RpZmljYXRpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5vdGlmaWNhdGlvbnNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtOb3RpZmljYXRpb25zU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7IH1cbiJdfQ==