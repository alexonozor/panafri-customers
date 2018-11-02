"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profile_service_1 = require("./shared/profile.service");
var router_1 = require("nativescript-angular/router");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, routerExtensions) {
        this.profileService = profileService;
        this.routerExtensions = routerExtensions;
        this.profile = [];
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html',
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            router_1.RouterExtensions])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw0REFBMEQ7QUFDMUQsc0RBQStEO0FBUy9EO0lBR0MsMEJBQ1MsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjNDLFlBQU8sR0FBYyxFQUFFLENBQUM7SUFLcEIsQ0FBQztJQUVMLG1DQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsaUNBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBWlcsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUNyQyxDQUFDO3lDQU13QixnQ0FBYztZQUNaLHlCQUFnQjtPQUwvQixnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9zaGFyZWQvcHJvZmlsZS5tb2RlbCc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdwcm9maWxlJyxcblx0dGVtcGxhdGVVcmw6ICdwcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHJvZmlsZTogUHJvZmlsZVtdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdGdvQmFjaygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG59Il19