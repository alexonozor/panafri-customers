import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NotificationsRoutingModule } from "./notification.routing";
import { NotificationsService } from "./shared/notifications.service";
import { NotificationsComponent } from "./notifications.component";
import { HttpModule } from "@angular/http";


@NgModule({
    imports: [
        NotificationsRoutingModule,
        NativeScriptCommonModule,
        HttpModule
    ],
    declarations: [
        NotificationsComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [NotificationsService]
})
export class NotificationsModule { }
