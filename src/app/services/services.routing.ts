import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ServicesComponent } from "./listings/services.component";



const routes: Routes = [
    { path: "", component: ServicesComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ServiceRoutingModule { }
