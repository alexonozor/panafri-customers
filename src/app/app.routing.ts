import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RequestsComponent } from "./requests/requests.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "requests", component: RequestsComponent },
    { path: "authentication", loadChildren: './app/authentication/auth.module#AuthModule' },
    { path: "products", loadChildren: './app/products/products.module#ProductsModule' },
    { path: "services", loadChildren: './app/services/services.module#ServicesModule' },
    { path: "categories", loadChildren: './app/categories/categories.module#CategoriesModule' },
    { path: "notifications", loadChildren: './app/notifications/notifications.module#NotificationsModule' },
    { path: "profile", loadChildren: './app/profile/profile.module#ProfileModule' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }