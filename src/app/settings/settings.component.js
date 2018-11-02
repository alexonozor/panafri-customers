"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_service_1 = require("./shared/settings.service");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.settings = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getList().subscribe(function (res) {
            _this.settings = res;
        });
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'settings',
            templateUrl: 'settings.component.html',
            providers: [settings_service_1.SettingsService]
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhEQUE0RDtBQVM1RDtJQUdDLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGcEQsYUFBUSxHQUFlLEVBQUUsQ0FBQztJQUU4QixDQUFDO0lBRXpELG9DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUM1QyxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFUVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDNUIsQ0FBQzt5Q0FLb0Msa0NBQWU7T0FIeEMsaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vc2hhcmVkL3NldHRpbmdzLm1vZGVsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdzZXR0aW5ncycsXG5cdHRlbXBsYXRlVXJsOiAnc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuXHRwcm92aWRlcnM6IFtTZXR0aW5nc1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRzZXR0aW5nczogU2V0dGluZ3NbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldExpc3QoKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXHRcdFx0dGhpcy5zZXR0aW5ncyA9IHJlcztcblx0XHR9KTtcblx0fVxufSJdfQ==