import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CategoriesRoutingModule } from "./categories.routing";
import { ListingCategoryComponent } from "./listing/listingCategories.component";
import { ProductsComponent } from "./products/products.component";


@NgModule({
    imports: [
        CategoriesRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        ProductsComponent,
        ListingCategoryComponent,
        ProductsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CategoriesModule { }
