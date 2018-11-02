import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListingCategoryComponent } from "./listing/listingCategories.component";
import { ProductsComponent } from "./products/products.component";


const routes: Routes = [
    { path: "", component: ListingCategoryComponent },
    { path: ":id", component: ProductsComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CategoriesRoutingModule { }
