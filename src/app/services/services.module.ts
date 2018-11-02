import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ServiceRoutingModule } from "./services.routing";
import { ServicesComponent } from "./listings/services.component";
import { CarouselDirective } from "nativescript-ng2-carousel/nativescript-ng2-carousel";
import { ServicesService } from './shared/services.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        HttpModule,
        ServiceRoutingModule,
        NativeScriptCommonModule
    ],
    declarations: [
        ServicesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ServicesService]
})
export class ServicesModule { }