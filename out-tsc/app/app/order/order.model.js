var Order = /** @class */ (function () {
    function Order(address, number, optionalAddress, paymentOoption, orderItem) {
        if (orderItem === void 0) { orderItem = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOoption = paymentOoption;
        this.orderItem = orderItem;
    }
    return Order;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
export { Order, OrderItem };
//# sourceMappingURL=order.model.js.map