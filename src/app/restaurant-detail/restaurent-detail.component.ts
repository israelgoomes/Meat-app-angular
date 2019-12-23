import { RestaurantService } from './../restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurent-detail',
  templateUrl: './restaurent-detail.component.html',
  styleUrls: ['./restaurent-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {


  restaurant: Restaurant
  constructor(private restaurantSrvc: RestaurantService,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantSrvc.restaurantById(this.route.snapshot.params['id']).subscribe(v=>{
      this.restaurant = v;
      console.log('restaurante selecionado',this.restaurant)
    })
    this.restaurantSrvc.reviewsByRestaurantId(this.route.snapshot.params['id']).subscribe(v=>{
      console.log('Reviews do restaurant', v)
    })
    
  }

}
