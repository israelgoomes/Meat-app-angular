var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from '../../shared/messages/notification.service';
var ShoppingCartservice = /** @class */ (function () {
    function ShoppingCartservice(notificationSrvc) {
        this.notificationSrvc = notificationSrvc;
        this.items = [];
    }
    ShoppingCartservice.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartservice.prototype.addItem = function (item) {
        //verificando se o item já existe 
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id == item.id; });
        //se sim, adicionamos mais um na sua quantidade
        if (foundItem) {
            this.increaseQty(foundItem);
            //se não, adicionamos o item ao array;   
        }
        else {
            this.items.push(new CartItem(item));
        }
        this.notificationSrvc.notify("Voc\u00EA adicionou o item " + item.name);
    };
    ShoppingCartservice.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationSrvc.notify("Voc\u00EA removeu o item " + item.menuItem.name);
    };
    ShoppingCartservice.prototype.removeOneItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id == item.id; });
        if (foundItem) {
            foundItem.quantity--;
            //se não, adicionamos o item ao array;   
        }
    };
    ShoppingCartservice.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartservice.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity == 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartservice.prototype.total = function () {
        return this.items
            //trocando o array apenas pelo valores
            .map(function (item) { return item.value(); })
            //executa uma função para cada membro do array, resultando em um único valor de retorno
            //nesse caso está fazendo a soma do total de todos valores do array, e seu valor inicial é zero.
            .reduce(function (prev, value) { return prev + value; }, 0);
    };
    ShoppingCartservice = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService])
    ], ShoppingCartservice);
    return ShoppingCartservice;
}());
export { ShoppingCartservice };
//# sourceMappingURL=shopping-cart.service.js.map