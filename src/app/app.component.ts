import {Component, OnInit} from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

headerDirect;
requestOptions;

  content = 'Welcome do Meat App!'

  constructor(private http: Http, 
    //private clienteSrvc: ClienteService
    ) { }
// tslint:disable-next-line:member-ordering
listaClientes: any;
 async ngOnInit() {
   // tslint:disable-next-line:no-unused-variable
  let header = this.createHeader();
  this.headerDirect = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'user-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjZjcwMjU1YzA5ZTA5MDgwODU2M2Q0MyIsIm5vbWUiOiJJc3JhZWwgR29tZXMgZGEgbGFwYSIsImVtYWlsIjoicmFlbF9nb29tZXNAaG90bWFpbC5jb20ifSwiaWF0IjoxNTU5NjkyMDM2fQ._4UWb6B1ht9A2igZ3OhoC2iwR5yf4fUP95s1Q2Hr_QM'
  }
  this.requestOptions ={
    headers: new Headers(this.headerDirect)
  }

  //this.listaClientes = this.clienteSrvc.obCliente();
   //console.log(this.listaClientes)
  /*await this.http.get('http://localhost:3000/api/clientes').map((response) => response.json()).subscribe((data) => {
      this.listaClientes = data
      console.log(this.listaClientes);

     })*/

  }


public createHeader(header?: HttpHeaders): HttpHeaders{
  if(!header){
    header = new HttpHeaders();
  }

    header = header.append('Content-type', 'application/json');
    header = header.append('accept', 'application/json');

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjZjcwMjU1YzA5ZTA5MDgwODU2M2Q0MyIsIm5vbWUiOiJJc3JhZWwgR29tZXMgZGEgbGFwYSIsImVtYWlsIjoicmFlbF9nb29tZXNAaG90bWFpbC5jb20ifSwiaWF0IjoxNTU5NjkyMDM2fQ._4UWb6B1ht9A2igZ3OhoC2iwR5yf4fUP95s1Q2Hr_QM';
    if(token){
      header = header.append('user-token', token);
    }
    return header;

}



}
