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

  productCart:any =[];

  getData(){
    return this.category
  }

  getProduct(_id){
    const objetosFiltrados = this.products.filter(sublevelId => sublevelId.sublevel_id  == _id);  
      return objetosFiltrados;
  }

  enlistCart(product){
    this.productCart.push(product);
    if(this.productCart.length > 0)
     () => this.productCart.length;
    
  }

  getProductCart(){
    return this.productCart.length;
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
