import { ReviwesComponent } from './restaurant-detail/reviwes/reviwes.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from '../app/restaurant-detail/restaurent-detail.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: './about/about.module.ts#AboutModule' },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviwesComponent },
        ] },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order', loadChildren: './order/order.module.ts#OrderModule' },
    { path: 'order-sumary', component: OrderSumaryComponent }
];
//# sourceMappingURL=app.routes.js.map