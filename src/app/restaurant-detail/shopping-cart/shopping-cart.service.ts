import { CartItem } from './cart-item.model';
import { Menu } from '../menu/menu-model';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
export class ShoppingCartservice{
    items: CartItem[] = [];

    clear(){
            this.items = [];
    }

    addItem(item: Menu){
       
        //verificando se o item já existe 
        let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id);
        //se sim, adicionamos mais um na sua quantidade
        if(foundItem){
           this.increaseQty(foundItem)
         //se não, adicionamos o item ao array;   
        }else{
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem){
        console.log('item removido 2', item)
        this.items.splice(this.items.indexOf(item), 1)
    }

    removeOneItem(item: Menu){
        let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id);
        if(foundItem){
            foundItem.quantity --; 
            //se não, adicionamos o item ao array;   
         }
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item){
        item.quantity = item.quantity -1;
        if(item.quantity == 0){
            this.removeItem(item);
        }
    }

    total(): number{
        return this.items
        //trocando o array apenas pelo valores
        .map(item => item.value())
        //executa uma função para cada membro do array, resultando em um único valor de retorno
        //nesse caso está fazendo a soma do total de todos valores do array, e seu valor inicial é zero.
        .reduce((prev, value)=> prev+value, 0);
    }
}