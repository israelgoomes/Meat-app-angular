import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio.option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  delivery: number = 8;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberParttern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: "CRED"},
    {label: 'Cartão Refeição', value: "REF"}
  ];


 
  constructor(private orderSrvc: OrderService, private route: Router, private fb: FormBuilder) { 
    console.log(this.paymentOptions)
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      number: this.fb.control('', [Validators.required, Validators.pattern(this.numberParttern)]), 
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
      const email = group.get('email');
      const emailConfirmation = group.get('emailConfirmation')
      if(!email || !emailConfirmation){
        return undefined
      }

      if(email.value !== emailConfirmation.value){
        return {emailsNotMatch:true}
      }
      return undefined
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
      this.route.navigate(['/order-sumary'])
      console.log(`compra concluida ${orderId}`)
      this.orderSrvc.clear()
    });
  }
}
