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
import { OrderService } from './order.service';
import { OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderSrvc, route, fb) {
        this.orderSrvc = orderSrvc;
        this.route = route;
        this.fb = fb;
        this.delivery = 8;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberParttern = /^[0-9]*$/;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão de Crédito', value: "CRED" },
            { label: 'Cartão Refeição', value: "REF" }
        ];
        console.log(this.paymentOptions);
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.fb.group({
            name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
            email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            emailConfirmation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
            number: this.fb.control('', [Validators.required, Validators.pattern(this.numberParttern)]),
            optionalAddress: this.fb.control(''),
            paymentOption: this.fb.control('', [Validators.required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderSrvc.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderSrvc.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderSrvc.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderSrvc.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderSrvc.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItem = this.cartItems().map(function (item) {
            return new OrderItem(item.quantity, item.menuItem.id);
        });
        this.orderSrvc.checkOrder(order).subscribe(function (orderId) {
            _this.route.navigate(['/order-sumary']);
            console.log("compra concluida " + orderId);
            _this.orderSrvc.clear();
        });
    };
    var OrderComponent_1;
    OrderComponent = OrderComponent_1 = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        }),
        __metadata("design:paramtypes", [OrderService, Router, FormBuilder])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map