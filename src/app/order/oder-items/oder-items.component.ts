import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartservice } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-oder-items',
  templateUrl: './oder-items.component.html',
  styleUrls: ['./oder-items.component.css']
})
export class OderItemsComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();
  constructor(private shoppingCartSrvc:ShoppingCartservice) { }

  ngOnInit() {
    console.log('items', this.items)
  }


  emitIncreaseQty(item: CartItem){
     this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item);
   }

  emitRemove(item){
    this.remove.emit(item);
  }

  total(){
    return this.shoppingCartSrvc.total()
  }

}
