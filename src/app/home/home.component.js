"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var router_2 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    // submit() {
    //   this.router.navigate(['authenticate']);
    // }
    HomeComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        searchbar.android.clearFocus();
    };
    HomeComponent.prototype.onOpenDrawerTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        this.drawerComponent.sideDrawer.closeDrawer();
    };
    HomeComponent.prototype.goToProduct = function (i) {
        this.routerExtensions.navigate(['products', i]);
    };
    HomeComponent.prototype.request = function () {
        this.routerExtensions.navigate(['requests']);
    };
    HomeComponent.prototype.goToCategories = function () {
        this.routerExtensions.navigate(['categories']);
    };
    HomeComponent.prototype.goToProducts = function () {
        this.routerExtensions.navigate(['products']);
    };
    HomeComponent.prototype.goToServices = function () {
        this.routerExtensions.navigate(['services']);
    };
    HomeComponent.prototype.goToNotifications = function () {
        this.routerExtensions.navigate(['notifications']);
    };
    HomeComponent.prototype.logout = function () {
        this.routerExtensions.navigate(['authentication', 'login']);
    };
    HomeComponent.prototype.goToProfile = function () {
        this.routerExtensions.navigate(['profile']);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBeUM7QUFDekMsOERBQTRGO0FBRTVGLHNEQUErRDtBQVMvRDtJQUdFLHVCQUNTLE1BQWMsRUFDYixnQkFBa0M7UUFEbkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDeEMsQ0FBQztJQUVMLGdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxJQUFJO0lBRUcsZ0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksU0FBUyxHQUF3QixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBeERrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7MERBQUM7SUFEdkUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FNaUIsZUFBTTtZQUNLLHlCQUFnQjtPQUxqQyxhQUFhLENBMER6QjtJQUFELG9CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICAvLyBzdWJtaXQoKSB7XG4gIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhdXRoZW50aWNhdGUnXSk7XG4gIC8vIH1cblxuICBwdWJsaWMgc0JMb2FkZWQoYXJncyl7XG4gICAgdmFyIHNlYXJjaGJhcjpTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgIHNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgfVxuXG4gIG9uT3BlbkRyYXdlclRhcCgpIHtcbiAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgZ29Ub1Byb2R1Y3QoaSkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ3Byb2R1Y3RzJywgaV0pO1xuICB9XG5cbiAgcmVxdWVzdCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydyZXF1ZXN0cyddKTtcbiAgfVxuXG4gIGdvVG9DYXRlZ29yaWVzKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2NhdGVnb3JpZXMnXSk7XG4gIH1cblxuICBnb1RvUHJvZHVjdHMoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsncHJvZHVjdHMnXSk7XG4gIH1cblxuICBnb1RvU2VydmljZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnc2VydmljZXMnXSk7XG4gIH1cblxuICBnb1RvTm90aWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydub3RpZmljYXRpb25zJ10pO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2F1dGhlbnRpY2F0aW9uJywgJ2xvZ2luJ10pO1xuICB9XG5cbiAgZ29Ub1Byb2ZpbGUoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsncHJvZmlsZSddKVxuICB9XG59Il19