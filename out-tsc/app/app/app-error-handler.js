import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof Response) {
            //caso o erro seja uma instancia de response, vamos mostrar o erro correto
            errorMessage = "Erro " + error.status + " ao acessar a URL " + error.url + " - " + error.statusText;
        }
        else {
            //caso contrario iremos apenas adicionar o erro a variavel erroeMessage
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        //sinaliza que assim que alguem tentar ler a string od observable vai receber essa string
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app-error-handler.js.map