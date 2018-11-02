"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { CategoriesService } from '../shared/categories.service';
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(routerExtensions, pageRoute) {
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.categoryId = params.id;
        });
    };
    ProductsComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        searchbar.android.clearFocus();
    };
    ProductsComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ProductsComponent.prototype.goToProduct = function (i) {
        this.routerExtensions.navigate(['products', i]);
    };
    ProductsComponent.prototype.request = function () {
        this.routerExtensions.navigate(['requests']);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_1.PageRoute])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELG9FQUFvRTtBQUNwRSxzREFBMEU7QUFFMUUsNENBQTJDO0FBVTNDO0lBRUMsMkJBQ1MsZ0JBQWtDLEVBQ2xDLFNBQW9CO1FBRHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUN4QixDQUFDO0lBRU4sb0NBQVEsR0FBUjtRQUFBLGlCQUlFO1FBSEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFSyxvQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDbkIsSUFBSSxTQUFTLEdBQXlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR0Qsa0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBN0JTLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLMEIseUJBQWdCO1lBQ3ZCLGtCQUFTO09BSmpCLGlCQUFpQixDQThCN0I7SUFBRCx3QkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSAnLi4vc2hhcmVkL2NhdGVnb3JpZXMubW9kZWwnO1xuLy8gaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAncHJvZHVjdHMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wcm9kdWN0cy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNhdGVnb3J5SWQ6IFN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcblx0ICkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSkuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxuXHRcdFx0dGhpcy5jYXRlZ29yeUlkID0gcGFyYW1zLmlkXG5cdFx0fSk7XG5cdCB9XG5cblx0cHVibGljIHNCTG9hZGVkKGFyZ3MpIHtcblx0XHR2YXIgc2VhcmNoYmFyOiBTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdHNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcblx0fVxuXG5cblx0Z29CYWNrKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cblxuXHRnb1RvUHJvZHVjdChpKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsncHJvZHVjdHMnLCBpXSk7XG5cdCAgfVxuXHRcblx0ICByZXF1ZXN0KCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ3JlcXVlc3RzJ10pO1xuXHQgIH1cbn0iXX0=