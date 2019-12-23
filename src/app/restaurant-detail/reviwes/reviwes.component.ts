import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Review } from './review-model';

@Component({
  selector: 'mt-reviwes',
  templateUrl: './reviwes.component.html',
  styleUrls: []
})
export class ReviwesComponent implements OnInit {

  reviews: any; 
  constructor(private route: ActivatedRoute,
              private restaurantSrvc: RestaurantService
    ) { }

  ngOnInit() {

    //forma de acessar o parametro da rota quando se trata de uma rota filha.
    this.reviews = this.restaurantSrvc.reviewsByRestaurantId(this.route.parent.snapshot.params['id'])
  /*  .subscribe(v=>{
      this.reviews = v;
      console.log('Lista de reviews', this.reviews)
      
    }) */
    
  }

}
