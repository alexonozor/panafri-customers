import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { CarouselDirective } from "nativescript-ng2-carousel/nativescript-ng2-carousel";
import { ProductsService } from './shared/products.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        HttpModule,
        ProductsRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        ProductsComponent,
        ProductComponent,
        CarouselDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ProductsService]
})
export class ProductsModule { }