import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { all } from 'q';

@Component({
  selector: 'app-showallprods',
  templateUrl: './showallprods.component.html',
  styleUrls: ['./showallprods.component.css']
})
export class ShowallprodsComponent implements OnInit {

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this.getallprods();
  }

  allproducts:any;

  getallprods(){
    let allproducsobv = this._http.getallproducts();
    allproducsobv.subscribe(data =>{
     console.log(data);
     this.allproducts = data['allproducts'];
    })
  }
}
