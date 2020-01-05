import { Component, OnInit } from '@angular/core';
import { ShoppingCartservice } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RadioOption } from '../shared/radio/radio.option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: "CRED"},
    {label: 'Cartão Refeição', value: "REF"}
  ];


 
  constructor(private shoppingCartSrvc:ShoppingCartservice) { 
    console.log(this.paymentOptions)
  }

  ngOnInit() {
    console.log('itens',this.items())
  }

  items(){
    return this.shoppingCartSrvc.items;
  }

  addItem(param){
    console.log(param)
    this.shoppingCartSrvc.addItem(param.menuItem);
  }

  removeItem(param){
    console.log('item removido',param.menuItem)
    this.shoppingCartSrvc.removeItem(param.menuItem);
  }
  removeOneItem(param){
    // if(param.quantity == 1){
    //   this.removeItem(param.menuItem)
    // }else{
    this.shoppingCartSrvc.removeOneItem(param.menuItem);
    //}
  }

  total(){
    return this.shoppingCartSrvc.total()
  }
}
