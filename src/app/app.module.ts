import { RestaurantService } from './restaurants/restaurant.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app.routes';
//import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurent-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { ReviwesComponent } from './restaurant-detail/reviwes/reviwes.component';
import { ShoppingCartservice } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import {FormsModule} from '@angular/forms';
import { TesteComponent } from './teste/teste.component';
import { InputComponent } from '../../src/app/shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviwesComponent,
    OrderComponent,
    TesteComponent,
    InputComponent,
    RadioComponent,
 //   HttpClientModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    //HttpClientModule,
    RouterModule.forRoot(ROUTES),
   // HttpClientModule
    //Ng4LoadingSpinnerModule 
  ],
  providers: [ 
    ShoppingCartservice,
      RestaurantService,
      {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
