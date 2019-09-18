import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  
  getallproducts(){
    return this._http.get('/products')
  }

  addnewproduct(newproduct){
    return this._http.post('/products', newproduct);  
  }

  updateproduct(id,product){
    return this._http.put('/products/'+id, product)
  }

  getproduct(id:String){
    return this._http.get('/products/'+ id)
  }

  deleteproduct(id:String){
    return this._http.delete('/products/' + id)
  }
}
