import { Component, OnInit } from '@angular/core';
import { ShoppingCartservice } from './shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartSrvc :ShoppingCartservice) { }

  ngOnInit() {

  }

  items(): any[]{
    return this.shoppingCartSrvc.items;
   
  }

  total(): number{
    return this.shoppingCartSrvc.total();
  }
removeItem(param){
  console.log('evento', param)
  this.shoppingCartSrvc.removeItem(param);
}

addItem(param){
  this.shoppingCartSrvc.addItem(param);
}

  clear(){
    this.shoppingCartSrvc.clear();
  }

}
