"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var products_routing_module_1 = require("./products-routing.module");
var products_component_1 = require("./products.component");
var product_component_1 = require("./product/product.component");
var nativescript_ng2_carousel_1 = require("nativescript-ng2-carousel/nativescript-ng2-carousel");
var products_service_1 = require("./shared/products.service");
var http_1 = require("@angular/http");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                products_routing_module_1.ProductsRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            declarations: [
                products_component_1.ProductsComponent,
                product_component_1.ProductComponent,
                nativescript_ng2_carousel_1.CarouselDirective
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [products_service_1.ProductsService]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELHNEQUF1RTtBQUN2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCxpR0FBd0Y7QUFDeEYsOERBQTREO0FBQzVELHNDQUEyQztBQW1CM0M7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFoQjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQkFBVTtnQkFDViwrQ0FBcUI7Z0JBQ3JCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsNkNBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDL0IsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgUHJvZHVjdHNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZHVjdHMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxEaXJlY3RpdmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nMi1jYXJvdXNlbC9uYXRpdmVzY3JpcHQtbmcyLWNhcm91c2VsXCI7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wcm9kdWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUHJvZHVjdHNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICAgICAgQ2Fyb3VzZWxEaXJlY3RpdmVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbUHJvZHVjdHNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7IH0iXX0=