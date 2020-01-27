var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartservice } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
var OderItemsComponent = /** @class */ (function () {
    function OderItemsComponent(shoppingCartSrvc) {
        this.shoppingCartSrvc = shoppingCartSrvc;
        this.increaseQty = new EventEmitter();
        this.decreaseQty = new EventEmitter();
        this.remove = new EventEmitter();
    }
    OderItemsComponent.prototype.ngOnInit = function () {
        console.log('items', this.items);
    };
    OderItemsComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    OderItemsComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    OderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    OderItemsComponent.prototype.total = function () {
        return this.shoppingCartSrvc.total();
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OderItemsComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OderItemsComponent.prototype, "increaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OderItemsComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OderItemsComponent.prototype, "remove", void 0);
    OderItemsComponent = __decorate([
        Component({
            selector: 'mt-oder-items',
            templateUrl: './oder-items.component.html',
            styleUrls: ['./oder-items.component.css']
        }),
        __metadata("design:paramtypes", [ShoppingCartservice])
    ], OderItemsComponent);
    return OderItemsComponent;
}());
export { OderItemsComponent };
//# sourceMappingURL=oder-items.component.js.map