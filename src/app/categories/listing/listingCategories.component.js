"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { CategoriesService } from '../shared/categories.service';
var router_1 = require("nativescript-angular/router");
var ListingCategoryComponent = /** @class */ (function () {
    function ListingCategoryComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.categories = [];
    }
    ListingCategoryComponent.prototype.ngOnInit = function () {
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.categories.push({ id: "" + (i + 1), name: 'category' });
            this.counter = i;
        }
    };
    ListingCategoryComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ListingCategoryComponent.prototype.gotoCategory = function (item) {
        this.routerExtensions.navigate(['categories', item.id]);
    };
    ListingCategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listing',
            templateUrl: 'listingCategories.html',
            styleUrls: ['./listingCategories.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ListingCategoryComponent);
    return ListingCategoryComponent;
}());
exports.ListingCategoryComponent = ListingCategoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZ0NhdGVnb3JpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGluZ0NhdGVnb3JpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBRTNFLG9FQUFvRTtBQUNwRSxzREFBMEU7QUFXMUU7SUFJQyxrQ0FDUyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUpwQyxlQUFVLEdBQWlCLEVBQUUsQ0FBQztJQUtsQyxDQUFDO0lBRUosMkNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFHLENBQUMsR0FBQyxDQUFDLENBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ1IsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELCtDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQXRCVyx3QkFBd0I7UUFScEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQy9DLENBQUM7eUNBTzBCLHlCQUFnQjtPQUwvQix3QkFBd0IsQ0F3QnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhdGVnb3JpZXMgfSBmcm9tICcuLi9zaGFyZWQvY2F0ZWdvcmllcy5tb2RlbCc7XG4vLyBpbXBvcnQgeyBDYXRlZ29yaWVzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdsaXN0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICdsaXN0aW5nQ2F0ZWdvcmllcy5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbGlzdGluZ0NhdGVnb3JpZXMuY3NzJ10sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHVibGljIGNhdGVnb3JpZXM6IENhdGVnb3JpZXNbXSA9IFtdO1xuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0KSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goeyBpZDogYCR7aSsxfWAsIG5hbWU6ICdjYXRlZ29yeScgfSk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBpO1xuICAgICAgICB9XG5cdH1cblxuXHRnb0JhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxuXG5cdGdvdG9DYXRlZ29yeShpdGVtKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnY2F0ZWdvcmllcycsIGl0ZW0uaWRdKVxuXHR9XG5cbn0iXX0=