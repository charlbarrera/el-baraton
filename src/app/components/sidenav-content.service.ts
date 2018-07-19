import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable, Subject, throwError } from 'rxjs';
// import { map, take, catchError } from 'rxjs/operators';
import { categories } from './categories';
import { products } from './products';


@Injectable({
  providedIn: 'root'
})
export class SidenavContentService {
 
  constructor() { }
  products = products;
  category = categories;

  getData(){
    return this.category
  }

  getProduct(_id){
    console.log(this.products.map((id)=> id.sublevel_id).filter(sublevelId => sublevelId == _id));  
    
  }


  // getJson(): Observable {
  //   return this.http.get('./assets/i18n/en.json')
  //       .pipe(map((response: Response) => {
  //           return response.json();
  //       }
  //   ))
  //   throw()=>catchError();
  //   } 

  // getJson(){
  //   let path = './product.json';
  //   return this.http.get(path);
  // }

  // getFile(){
  //    this.getJson().map( data =>  {return data.son()})
  // }

}
