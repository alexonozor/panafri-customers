"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var notifications_service_1 = require("./shared/notifications.service");
var router_1 = require("nativescript-angular/router");
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notificationsService, routerExtensions) {
        this.notificationsService = notificationsService;
        this.routerExtensions = routerExtensions;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        // this.notificationsService.getList().subscribe((res) => {
        // 	this.notifications = res;
        // });
    };
    NotificationsComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    NotificationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notifications',
            templateUrl: 'notifications.component.html',
        }),
        __metadata("design:paramtypes", [notifications_service_1.NotificationsService,
            router_1.RouterExtensions])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx3RUFBc0U7QUFDdEUsc0RBQStEO0FBUS9EO0lBR0MsZ0NBQ1Msb0JBQTBDLEVBQzFDLGdCQUFrQztRQURsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKM0Msa0JBQWEsR0FBb0IsRUFBRSxDQUFDO0lBS2hDLENBQUM7SUFFTCx5Q0FBUSxHQUFSO1FBQ0MsMkRBQTJEO1FBQzNELDZCQUE2QjtRQUM3QixNQUFNO0lBQ1AsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQWhCVyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1NBQzNDLENBQUM7eUNBTThCLDRDQUFvQjtZQUN4Qix5QkFBZ0I7T0FML0Isc0JBQXNCLENBaUJsQztJQUFELDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL3NoYXJlZC9ub3RpZmljYXRpb25zLm1vZGVsJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdub3RpZmljYXRpb25zJyxcblx0dGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uc1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZ2V0TGlzdCgpLnN1YnNjcmliZSgocmVzKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLm5vdGlmaWNhdGlvbnMgPSByZXM7XG5cdFx0Ly8gfSk7XG5cdH1cblxuXHRnb0JhY2soKSB7XG5cdCAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxufSJdfQ==