var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RestaurantService } from './restaurants/restaurant.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
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
import { TesteComponent } from './teste/teste.component';
import { OrderService } from './order/order.service';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                HomeComponent,
                RestaurantsComponent,
                RestaurantComponent,
                RestaurantDetailComponent,
                MenuComponent,
                ShoppingCartComponent,
                MenuItemComponent,
                ReviwesComponent,
                TesteComponent,
                OrderSumaryComponent,
            ],
            imports: [
                BrowserModule,
                HttpModule,
                // FormsModule,
                //ReactiveFormsModule,
                SharedModule,
                //HttpClientModule,
                RouterModule.forRoot(ROUTES),
            ],
            providers: [
                ShoppingCartservice,
                RestaurantService,
                OrderService,
                { provide: LOCALE_ID, useValue: 'pt-BR' }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map