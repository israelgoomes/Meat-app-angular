import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio.option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];
  value : any;
  onChange: any;
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value;
    //chamando a função aqui pois é aonde o valor muda
    //dessa form é avisa às diretivas que vão estar sendo usadas pelo componente, que o valor do componente mudou
    this.onChange(this.value)
  }

   /**
     * Write a new value to the element.
     */
    //é um método que vai ser chamado pelas diretivas quando elas querem passar um valor para o componente
    writeValue(obj: any): void{
      this.value = obj;
    };
    /**}
     * Set the function to be called when the control receives a change event.
     */
    //é passada uma função pra gente, que a gente tem que chamar essafunção sempre que o valor, sempre que o valor interno do componente mudar.
    //então sempre que a função mudar temos que chamar a var onChange passando o valor
    registerOnChange(fn: any): void{
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */

     //usado caso queira registrar que o usuário entrou nos eu componente 
    registerOnTouched(fn: any): void{
    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */

     //
    setDisabledState?(isDisabled: boolean): void;

  
}
