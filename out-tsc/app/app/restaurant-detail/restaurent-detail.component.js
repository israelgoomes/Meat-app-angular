var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RestaurantService } from './../restaurants/restaurant.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(restaurantSrvc, route) {
        this.restaurantSrvc = restaurantSrvc;
        this.route = route;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantSrvc.restaurantById(this.route.snapshot.params['id']).subscribe(function (v) {
            _this.restaurant = v;
            console.log('restaurante selecionado', _this.restaurant);
        });
        this.restaurantSrvc.reviewsByRestaurantId(this.route.snapshot.params['id']).subscribe(function (v) {
            console.log('Reviews do restaurant', v);
        });
    };
    RestaurantDetailComponent = __decorate([
        Component({
            selector: 'mt-restaurent-detail',
            templateUrl: './restaurent-detail.component.html',
            styleUrls: ['./restaurent-detail.component.css']
        }),
        __metadata("design:paramtypes", [RestaurantService,
            ActivatedRoute])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());
export { RestaurantDetailComponent };
//# sourceMappingURL=restaurent-detail.component.js.map