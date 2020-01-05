import { Menu } from '../menu/menu-model';
export class CartItem{

    constructor(public menuItem: Menu,
                public quantity: number = 1){

                }
     
                value(): number {
                    return this.menuItem.price * this.quantity;
                }

}