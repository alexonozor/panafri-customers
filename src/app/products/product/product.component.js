"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(routerExtensions, pageRoute) {
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.isBusy = true;
        this.images = [];
        this.images = [
            { url: 'https://unsplash.it/400/300/?image=867' },
            { url: 'https://unsplash.it/400/300/?image=870' },
            { url: 'https://unsplash.it/400/300/?image=876' },
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIndicatorBusy();
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.id = params["id"];
        });
    };
    ProductComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ProductComponent.prototype.getIndicatorBusy = function () {
        var _this = this;
        setTimeout(function () {
            _this.isBusy = false;
        }, 7000);
    };
    ProductComponent.prototype.onBusyChanged = function (event) {
        // handle indicator busy change
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_1.PageRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBMEU7QUFDMUUsNENBQTJDO0FBUzNDO0lBS0MsMEJBQ1MsZ0JBQWtDLEVBQ2xDLFNBQW9CO1FBRHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUw1QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ2IsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQU1oQyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRyxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7WUFDbEQsRUFBRyxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7WUFDbEQsRUFBRyxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7U0FDckQsQ0FBQztJQUNGLENBQUM7SUFFRixtQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNqQyxxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNsRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDaEIsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFJRCwyQ0FBZ0IsR0FBaEI7UUFBQSxpQkFJQztRQUhDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQiwrQkFBK0I7SUFDakMsQ0FBQztJQXhDVSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBUTBCLHlCQUFnQjtZQUN2QixrQkFBUztPQVBqQixnQkFBZ0IsQ0F5QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3Byb2R1Y3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Byb2R1Y3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGlkOiBOdW1iZXI7XG4gIGlzQnVzeTogQm9vbGVhbiA9IHRydWU7XG4gIHByb3RlY3RlZCBpbWFnZXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdFx0cHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZVxuXHQpIHsgXG4gICAgdGhpcy5pbWFnZXMgPSBbXG4gICAgICB7ICB1cmw6ICdodHRwczovL3Vuc3BsYXNoLml0LzQwMC8zMDAvP2ltYWdlPTg2NycgfSxcbiAgICAgIHsgIHVybDogJ2h0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzMwMC8/aW1hZ2U9ODcwJyB9LFxuICAgICAgeyAgdXJsOiAnaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMzAwLz9pbWFnZT04NzYnIH0sXG4gIF07XG4gIH1cblxuXHRuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldEluZGljYXRvckJ1c3koKTtcblx0XHQvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXG5cdFx0dGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcblx0XHRcdHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG5cdFx0KS5mb3JFYWNoKChwYXJhbXMpID0+IHsgXG5cdFx0XHR0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl07IFxuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGdvQmFjaygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuXG4gIFxuICBnZXRJbmRpY2F0b3JCdXN5KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICB9LCA3MDAwKVxuICB9XG5cbiAgb25CdXN5Q2hhbmdlZChldmVudCkge1xuICAgIC8vIGhhbmRsZSBpbmRpY2F0b3IgYnVzeSBjaGFuZ2VcbiAgfVxufSJdfQ==