import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

restaurants: Restaurant[];

  constructor(private restaurantSrvc: RestaurantService) { }

  ngOnInit() {
    this.restaurantSrvc.restaurants().subscribe(restaurants=> {
      this.restaurants = restaurants;
    });
    console.log(this.restaurants);
  
  }

}
