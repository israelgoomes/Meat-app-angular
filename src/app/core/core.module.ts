import { NgModule } from '@angular/core';
import { ShoppingCartservice } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../restaurants/restaurant.service';
import { OrderService } from '../order/order.service';

@NgModule({
providers:[
    ShoppingCartservice,
    RestaurantService,
    OrderService
]
})



export class CoreModule{}