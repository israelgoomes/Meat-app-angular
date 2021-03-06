var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ShoppingCartservice } from '../shopping-cart/shopping-cart.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(restaurantSrvc, route, shoppingCartSrvc) {
        this.restaurantSrvc = restaurantSrvc;
        this.route = route;
        this.shoppingCartSrvc = shoppingCartSrvc;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantSrvc.menuByRestaurantId(this.route.parent.snapshot.params['id'])
            .subscribe(function (v) {
            _this.menu = v;
            console.log('menu', _this.menu);
        });
    };
    MenuComponent.prototype.addMenuItem = function (event) {
        this.shoppingCartSrvc.addItem(event);
    };
    MenuComponent.prototype.removeitem = function (event) {
        this.shoppingCartSrvc;
    };
    MenuComponent = __decorate([
        Component({
            selector: 'mt-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [RestaurantService,
            ActivatedRoute,
            ShoppingCartservice])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map