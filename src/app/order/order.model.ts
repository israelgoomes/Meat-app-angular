class Order{
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOoption: string,
        public orderItem: OrderItem[] = []

    ){}
}

class OrderItem{
    constructor(public quantity: number,  public menuId: string){}
}

export {Order, OrderItem}