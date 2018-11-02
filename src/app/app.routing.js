"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var requests_component_1 = require("./requests/requests.component");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "requests", component: requests_component_1.RequestsComponent },
    { path: "authentication", loadChildren: './app/authentication/auth.module#AuthModule' },
    { path: "products", loadChildren: './app/products/products.module#ProductsModule' },
    { path: "services", loadChildren: './app/services/services.module#ServicesModule' },
    { path: "categories", loadChildren: './app/categories/categories.module#CategoriesModule' },
    { path: "notifications", loadChildren: './app/notifications/notifications.module#NotificationsModule' },
    { path: "profile", loadChildren: './app/profile/profile.module#ProfileModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsd0RBQXNEO0FBQ3RELG9FQUFrRTtBQUdsRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSw2Q0FBNkMsRUFBRTtJQUN2RixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLCtDQUErQyxFQUFFO0lBQ25GLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxxREFBcUQsRUFBRTtJQUMzRixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLDhEQUE4RCxFQUFFO0lBQ3ZHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsNENBQTRDLEVBQUU7Q0FDbEYsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcXVlc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVxdWVzdHNcIiwgY29tcG9uZW50OiBSZXF1ZXN0c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJhdXRoZW50aWNhdGlvblwiLCBsb2FkQ2hpbGRyZW46ICcuL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoLm1vZHVsZSNBdXRoTW9kdWxlJyB9LFxuICAgIHsgcGF0aDogXCJwcm9kdWN0c1wiLCBsb2FkQ2hpbGRyZW46ICcuL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUjUHJvZHVjdHNNb2R1bGUnIH0sXG4gICAgeyBwYXRoOiBcInNlcnZpY2VzXCIsIGxvYWRDaGlsZHJlbjogJy4vYXBwL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZSNTZXJ2aWNlc01vZHVsZScgfSxcbiAgICB7IHBhdGg6IFwiY2F0ZWdvcmllc1wiLCBsb2FkQ2hpbGRyZW46ICcuL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMubW9kdWxlI0NhdGVnb3JpZXNNb2R1bGUnIH0sXG4gICAgeyBwYXRoOiBcIm5vdGlmaWNhdGlvbnNcIiwgbG9hZENoaWxkcmVuOiAnLi9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSNOb3RpZmljYXRpb25zTW9kdWxlJyB9LFxuICAgIHsgcGF0aDogXCJwcm9maWxlXCIsIGxvYWRDaGlsZHJlbjogJy4vYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUjUHJvZmlsZU1vZHVsZScgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19