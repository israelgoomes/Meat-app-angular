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
import { ShoppingCartservice } from '../restaurant-detail/shopping-cart/shopping-cart.service';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(shoppingCartSrvc) {
        this.shoppingCartSrvc = shoppingCartSrvc;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão de Crédito', value: "CRED" },
            { label: 'Cartão Refeição', value: "REF" }
        ];
        console.log(this.paymentOptions);
    }
    OrderComponent.prototype.ngOnInit = function () {
        console.log('itens', this.items());
    };
    OrderComponent.prototype.items = function () {
        return this.shoppingCartSrvc.items;
    };
    OrderComponent.prototype.addItem = function (param) {
        console.log(param);
        this.shoppingCartSrvc.addItem(param.menuItem);
    };
    OrderComponent.prototype.removeItem = function (param) {
        console.log('item removido', param.menuItem);
        this.shoppingCartSrvc.removeItem(param.menuItem);
    };
    OrderComponent.prototype.removeOneItem = function (param) {
        // if(param.quantity == 1){
        //   this.removeItem(param.menuItem)
        // }else{
        this.shoppingCartSrvc.removeOneItem(param.menuItem);
        //}
    };
    OrderComponent.prototype.total = function () {
        return this.shoppingCartSrvc.total();
    };
    OrderComponent = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartservice])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map