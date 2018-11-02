"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var categories_routing_1 = require("./categories.routing");
var listingCategories_component_1 = require("./listing/listingCategories.component");
var products_component_1 = require("./products/products.component");
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                categories_routing_1.CategoriesRoutingModule,
                common_1.NativeScriptCommonModule
            ],
            declarations: [
                products_component_1.ProductsComponent,
                listingCategories_component_1.ListingCategoryComponent,
                products_component_1.ProductsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yaWVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUsMkRBQStEO0FBQy9ELHFGQUFpRjtBQUNqRixvRUFBa0U7QUFpQmxFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFkNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRDQUF1QjtnQkFDdkIsaUNBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsc0RBQXdCO2dCQUN4QixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBDYXRlZ29yaWVzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NhdGVnb3JpZXMucm91dGluZ1wiO1xuaW1wb3J0IHsgTGlzdGluZ0NhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGluZy9saXN0aW5nQ2F0ZWdvcmllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENhdGVnb3JpZXNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcbiAgICAgICAgTGlzdGluZ0NhdGVnb3J5Q29tcG9uZW50LFxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzTW9kdWxlIHsgfVxuIl19