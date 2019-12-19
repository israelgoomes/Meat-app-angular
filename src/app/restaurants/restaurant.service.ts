import { ErrorHandler } from './../app-error-handler';
import { MEAT_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map'
import  'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService {

    constructor(private http: Http){}

        restaurants(): Observable<Restaurant[]> {

              //utilizando o map para mapear a resposta do get e retornar apenas o valor json que interessa
                return this.http.get(`${MEAT_API}/restaurants`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
                
            }
    
        
    
}