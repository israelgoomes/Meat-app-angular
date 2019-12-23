import { Menu } from './../restaurant-detail/menu/menu-model';
import { ErrorHandler } from './../app-error-handler';
import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map'
import  'rxjs/add/operator/catch'
import { Review } from 'app/restaurant-detail/reviwes/review-model';

@Injectable()
export class RestaurantService {

    constructor(private http: Http){}

        restaurants(): Observable<Restaurant[]> {

              //utilizando o map para mapear a resposta do get e retornar apenas o valor json que interessa
                return this.http.get(`${MEAT_API}/restaurants`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
                
            }
    
        restaurantById(id: string): Observable<Restaurant> {

                return this.http.get(`${MEAT_API}/restaurants/${id}`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
        }

        reviewsByRestaurantId(id: string): Observable<Review[]>{
            return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
        }

        menuByRestaurantId(id: string): Observable<Menu[]>{
            return this.http.get(`${MEAT_API}/restaurant/${id}/menu`)
                                .map(response => response.json())
                                .catch(ErrorHandler.handleError);
                            }
    
}