import { Injectable } from "@angular/core";
import { ShoppingCartservice } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from 'rxjs/Observable';
import { Order } from "./order.model";
import {Http, Headers, RequestOptions} from '@angular/http'
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService{
    constructor(private cartService: ShoppingCartservice, public http: Http){

    }

    itemsValue(): number{
         return this.cartService.total()
    }


    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
         this,this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
         this.cartService.decreaseQty(item);
    }
    remove(item: CartItem){
         this.cartService.removeItem(item)
    }

    clear(){
         this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string>{
         console.log('o que está sendo enviado', order)
         const header = new Headers();
         header.append('Content-type', 'application/json');
         return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: header}))
         .map(response => response.json())
         .map(order => order.id)
         //caso quisesse retornar um Observable string, poderia substituir o order que recebemos pelo seu id
          
    }
}