import { Component, OnInit } from '@angular/core';
import { ShoppingCartservice } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RadioOption } from '../shared/radio/radio.option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: "CRED"},
    {label: 'Cartão Refeição', value: "REF"}
  ];


 
  constructor(private orderSrvc: OrderService) { 
    console.log(this.paymentOptions)
  }

  ngOnInit() {
    //console.log('itens',this.items())
  }


  itemsValue(): number{
    return this.orderSrvc.itemsValue();
  }

  cartItems(){
    return this.orderSrvc.cartItems();
  }

  increaseQty(item: CartItem){
     this.orderSrvc.increaseQty(item)
  }
  decreaseQty(item: CartItem){
     this.orderSrvc.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderSrvc.remove(item);
  }

  checkOrder(order: Order){
    order.orderItem =  this.cartItems().map((item:CartItem) => 
    new OrderItem(item.quantity, item.menuItem.id));
    this.orderSrvc.checkOrder(order).subscribe((orderId: string)=>{
      console.log(`compra concluida ${orderId}`)
      this.orderSrvc.clear()
    });
    console.log(order)
  }
}
