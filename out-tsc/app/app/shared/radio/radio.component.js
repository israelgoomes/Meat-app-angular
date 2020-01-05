var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
    }
    RadioComponent_1 = RadioComponent;
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.setValue = function (value) {
        this.value = value;
        //chamando a função aqui pois é aonde o valor muda
        //dessa form é avisa às diretivas que vão estar sendo usadas pelo componente, que o valor do componente mudou
        this.onChange(this.value);
    };
    /**
      * Write a new value to the element.
      */
    //é um método que vai ser chamado pelas diretivas quando elas querem passar um valor para o componente
    RadioComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    ;
    /**}
     * Set the function to be called when the control receives a change event.
     */
    //é passada uma função pra gente, que a gente tem que chamar essafunção sempre que o valor, sempre que o valor interno do componente mudar.
    //então sempre que a função mudar temos que chamar a var onChange passando o valor
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called when the control receives a touch event.
     */
    //usado caso queira registrar que o usuário entrou nos eu componente 
    RadioComponent.prototype.registerOnTouched = function (fn) {
    };
    var RadioComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], RadioComponent.prototype, "options", void 0);
    RadioComponent = RadioComponent_1 = __decorate([
        Component({
            selector: 'mt-radio',
            templateUrl: './radio.component.html',
            styleUrls: ['./radio.component.css'],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return RadioComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());
export { RadioComponent };
//# sourceMappingURL=radio.component.js.map