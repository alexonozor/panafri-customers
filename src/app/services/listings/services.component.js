"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_service_1 = require("../shared/services.service");
var router_1 = require("nativescript-angular/router");
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(servicesService, routerExtensions) {
        this.servicesService = servicesService;
        this.routerExtensions = routerExtensions;
        this.services = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        searchbar.android.clearFocus();
    };
    ServicesComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'services',
            templateUrl: 'services.component.html',
            styleUrls: ['./services.component.css']
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService,
            router_1.RouterExtensions])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtEQUE2RDtBQUU3RCxzREFBK0Q7QUFTL0Q7SUFJQywyQkFDUyxlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMM0MsYUFBUSxHQUFlLEVBQUUsQ0FBQztJQU10QixDQUFDO0lBRUwsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDbkIsSUFBSSxTQUFTLEdBQXlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFwQlUsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO3lDQU95QixrQ0FBZTtZQUNkLHlCQUFnQjtPQU4vQixpQkFBaUIsQ0FxQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzLm1vZGVsJztcbmltcG9ydCB7IFNlcnZpY2VzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NlcnZpY2VzJyxcblx0dGVtcGxhdGVVcmw6ICdzZXJ2aWNlcy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0c2VydmljZXM6IFNlcnZpY2VzW10gPSBbXTtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2VydmljZXNTZXJ2aWNlOiBTZXJ2aWNlc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdFxuXHR9XG5cblx0cHVibGljIHNCTG9hZGVkKGFyZ3MpIHtcblx0XHR2YXIgc2VhcmNoYmFyOiBTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdHNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcblx0fVxuXG5cdHB1YmxpYyBnb0JhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59Il19