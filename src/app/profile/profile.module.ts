import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProfileRoutingModule } from "./profile.routing";
import { ProfileComponent } from "./profile.component";
import { ProfileService } from "./shared/profile.service";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        ProfileRoutingModule,
        NativeScriptCommonModule,
        HttpModule
    ],
    declarations: [
        ProfileComponent,
      
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [ProfileService]
})
export class ProfileModule { }
