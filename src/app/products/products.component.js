"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_service_1 = require("./shared/products.service");
var router_1 = require("nativescript-angular/router");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, routerExtensions) {
        this.productsService = productsService;
        this.routerExtensions = routerExtensions;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        searchbar.android.clearFocus();
    };
    ProductsComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.component.html',
            styleUrls: ['./products.component.css'],
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            router_1.RouterExtensions])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhEQUE0RDtBQUU1RCxzREFBK0Q7QUFTL0Q7SUFHQywyQkFDUyxlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKM0MsYUFBUSxHQUFlLEVBQUUsQ0FBQztJQUt0QixDQUFDO0lBRUwsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSxvQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDbkIsSUFBSSxTQUFTLEdBQXlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFuQlUsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO3lDQU15QixrQ0FBZTtZQUNkLHlCQUFnQjtPQUwvQixpQkFBaUIsQ0FxQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IFByb2R1Y3RzIH0gZnJvbSAnLi9zaGFyZWQvcHJvZHVjdHMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdwcm9kdWN0cycsXG5cdHRlbXBsYXRlVXJsOiAncHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wcm9kdWN0cy5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRwcm9kdWN0czogUHJvZHVjdHNbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdFxuXHR9XG5cblx0cHVibGljIHNCTG9hZGVkKGFyZ3MpIHtcblx0XHR2YXIgc2VhcmNoYmFyOiBTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuXHRcdHNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcblx0fVxuXG5cdHB1YmxpYyBnb0JhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbn0iXX0=