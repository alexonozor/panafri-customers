"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var products_component_1 = require("./products.component");
var product_component_1 = require("./product/product.component");
var routes = [
    { path: "", component: products_component_1.ProductsComponent },
    { path: ":id", component: product_component_1.ProductComponent }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());
exports.ProductsRoutingModule = ProductsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUcvRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Q0FDL0MsQ0FBQztBQU9GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxxQkFBcUIsQ0FBSTtJQUFELDRCQUFDO0NBQUEsQUFBdEMsSUFBc0M7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFByb2R1Y3RzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIjppZFwiLCBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQgfVxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNSb3V0aW5nTW9kdWxlIHsgfVxuIl19