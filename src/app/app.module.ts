import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactory, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule,  } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { RequestsComponent } from "./requests/requests.component";
import { CircularProgressBarComponent } from "./requests/circular-progress-bar";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIGaugeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        RequestsComponent,
        CircularProgressBarComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
