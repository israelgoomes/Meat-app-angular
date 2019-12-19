import { RestaurantDetailComponent } from '../app/restaurant-detail/restaurent-detail.component';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent},
    {path: 'restaurants', component: RestaurantsComponent}
]