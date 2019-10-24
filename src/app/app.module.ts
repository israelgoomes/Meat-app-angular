import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app.routes';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
 //   HttpClientModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //HttpClientModule,
    RouterModule.forRoot(ROUTES),
   // HttpClientModule
    //Ng4LoadingSpinnerModule 
  ],
  providers: [ 
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
