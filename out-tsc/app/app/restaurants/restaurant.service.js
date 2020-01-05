var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ErrorHandler } from './../app-error-handler';
import { MEAT_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.restaurants = function () {
        //utilizando o map para mapear a resposta do get e retornar apenas o valor json que interessa
        return this.http.get(MEAT_API + "/restaurants")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.restaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id)
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.reviewsByRestaurantId = function (id) {
        return this.http.get(MEAT_API + "/restaurant/" + id + "/reviews")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.menuByRestaurantId = function (id) {
        return this.http.get(MEAT_API + "/restaurant/" + id + "/menu")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RestaurantService);
    return RestaurantService;
}());
export { RestaurantService };
//# sourceMappingURL=restaurant.service.js.map