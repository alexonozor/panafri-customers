"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var listingCategories_component_1 = require("./listing/listingCategories.component");
var products_component_1 = require("./products/products.component");
var routes = [
    { path: "", component: listingCategories_component_1.ListingCategoryComponent },
    { path: ":id", component: products_component_1.ProductsComponent }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());
exports.CategoriesRoutingModule = CategoriesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcmllcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxxRkFBaUY7QUFDakYsb0VBQWtFO0FBR2xFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0RBQXdCLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtDQUNoRCxDQUFDO0FBT0Y7SUFBQTtJQUF1QyxDQUFDO0lBQTNCLHVCQUF1QjtRQUpuQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IExpc3RpbmdDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuL2xpc3RpbmcvbGlzdGluZ0NhdGVnb3JpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMaXN0aW5nQ2F0ZWdvcnlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiOmlkXCIsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQgfVxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=