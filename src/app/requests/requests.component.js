"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(routerExtensions, pageRoute) {
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.isBusy = true;
        this.size = [this.random(), this.random(), this.random()];
        this.progress = [this.random(0, 100), this.random(0, 100), this.random(0, 100)];
    }
    RequestsComponent.prototype.ngOnInit = function () {
        this.getIndicatorBusy();
    };
    RequestsComponent.prototype.getIndicatorBusy = function () {
        var _this = this;
        setTimeout(function () {
            _this.isBusy = false;
        }, 7000);
    };
    RequestsComponent.prototype.onBusyChanged = function (event) {
        // handle indicator busy change
    };
    RequestsComponent.prototype.random = function (min, max) {
        if (min === void 0) { min = 50; }
        if (max === void 0) { max = 150; }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    RequestsComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    RequestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'requests',
            templateUrl: './requests.component.html',
            styleUrls: ['./requests.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_1.PageRoute])
    ], RequestsComponent);
    return RequestsComponent;
}());
exports.RequestsComponent = RequestsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUEwRTtBQVMxRTtJQUlFLDJCQUNRLGdCQUFrQyxFQUNsQyxTQUFvQjtRQURwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFMNUIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELGFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFJdkUsQ0FBQztJQUlOLG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUYsNENBQWdCLEdBQWhCO1FBQUEsaUJBSUU7UUFIRCxVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDUixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sR0FBUSxFQUFFLEdBQVM7UUFBbkIsb0JBQUEsRUFBQSxRQUFRO1FBQUUsb0JBQUEsRUFBQSxTQUFTO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0QsQ0FBQztJQUVRLGtDQUFNLEdBQWI7UUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBL0JVLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDdkMsQ0FBQzt5Q0FPMEIseUJBQWdCO1lBQ3ZCLGtCQUFTO09BTmpCLGlCQUFpQixDQWdDN0I7SUFBRCx3QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdyZXF1ZXN0cycsXG5cdHRlbXBsYXRlVXJsOiAnLi9yZXF1ZXN0cy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3JlcXVlc3RzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNCdXN5OiBCb29sZWFuID0gdHJ1ZTtcbiAgc2l6ZSA9IFt0aGlzLnJhbmRvbSgpLCB0aGlzLnJhbmRvbSgpLCB0aGlzLnJhbmRvbSgpXTtcbiAgcHJvZ3Jlc3MgPSBbdGhpcy5yYW5kb20oMCwgMTAwKSwgdGhpcy5yYW5kb20oMCwgMTAwKSwgdGhpcy5yYW5kb20oMCwgMTAwKV07XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlXG4gICkgeyB9XG4gIFxuICBcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldEluZGljYXRvckJ1c3koKTtcbiAgfVxuXG5cdGdldEluZGljYXRvckJ1c3koKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmlzQnVzeSA9IGZhbHNlO1xuXHRcdH0sIDcwMDApXG4gIH1cblxuICBvbkJ1c3lDaGFuZ2VkKGV2ZW50KSB7XG4gICAgLy8gaGFuZGxlIGluZGljYXRvciBidXN5IGNoYW5nZVxuICB9XG5cbiAgcmFuZG9tKG1pbiA9IDUwLCBtYXggPSAxNTApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cbiAgXG4gIHB1YmxpYyBnb0JhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59Il19