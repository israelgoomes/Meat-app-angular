import { CartItem } from './cart-item.model';
var ShoppingCartservice = /** @class */ (function () {
    function ShoppingCartservice() {
        this.items = [];
    }
    ShoppingCartservice.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartservice.prototype.addItem = function (item) {
        //verificando se o item já existe 
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id == item.id; });
        //se sim, adicionamos mais um na sua quantidade
        if (foundItem) {
            foundItem.quantity++;
            //se não, adicionamos o item ao array;   
        }
        else {
            this.items.push(new CartItem(item));
        }
    };
    ShoppingCartservice.prototype.removeItem = function (item) {
        console.log('item removido 2', item);
        this.items.splice(this.items.indexOf(item), 1);
    };
    ShoppingCartservice.prototype.removeOneItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id == item.id; });
        if (foundItem) {
            foundItem.quantity--;
            //se não, adicionamos o item ao array;   
        }
    };
    ShoppingCartservice.prototype.total = function () {
        return this.items
            //trocando o array apenas pelo valores
            .map(function (item) { return item.value(); })
            //executa uma função para cada membro do array, resultando em um único valor de retorno
            //nesse caso está fazendo a soma do total de todos valores do array, e seu valor inicial é zero.
            .reduce(function (prev, value) { return prev + value; }, 0);
    };
    return ShoppingCartservice;
}());
export { ShoppingCartservice };
//# sourceMappingURL=shopping-cart.service.js.map