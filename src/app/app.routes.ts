import { ReviwesComponent } from './restaurant-detail/reviwes/reviwes.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from '../app/restaurant-detail/restaurent-detail.component';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderComponent } from './order/order.component';
import { TesteComponent } from './teste/teste.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:[
           {path: '', redirectTo: 'menu', pathMatch: 'full'},
           {path: 'menu', component: MenuComponent},
           {path: 'reviews', component: ReviwesComponent}, 
        ]},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order', component: OrderComponent},
    {path: 'teste', component: TesteComponent}
]