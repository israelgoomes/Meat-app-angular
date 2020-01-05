import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Menu } from './menu-model';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartservice } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu[];
  constructor(private restaurantSrvc: RestaurantService,
              private route: ActivatedRoute,
              private shoppingCartSrvc:ShoppingCartservice  
    ) { }

  ngOnInit() {
    this.restaurantSrvc.menuByRestaurantId(this.route.parent.snapshot.params['id'])
   .subscribe(v=>{
      this.menu = v
      console.log('menu', this.menu)
    })    
  }
  addMenuItem(event){
    this.shoppingCartSrvc.addItem(event);
  }

    removeitem(event){
      this.shoppingCartSrvc
    }
}
