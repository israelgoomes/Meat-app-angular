var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingCartservice } from './shopping-cart.service';
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartSrvc) {
        this.shoppingCartSrvc = shoppingCartSrvc;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartSrvc.items;
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartSrvc.total();
    };
    ShoppingCartComponent.prototype.removeItem = function (param) {
        console.log('evento', param);
        this.shoppingCartSrvc.removeItem(param);
    };
    ShoppingCartComponent.prototype.addItem = function (param) {
        this.shoppingCartSrvc.addItem(param);
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartSrvc.clear();
    };
    ShoppingCartComponent = __decorate([
        Component({
            selector: 'mt-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            styleUrls: ['./shopping-cart.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartservice])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map