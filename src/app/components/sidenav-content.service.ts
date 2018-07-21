import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable, Subject, throwError } from 'rxjs';
// import { map, take, catchError } from 'rxjs/operators';
import { categories } from './categories';
import { products } from './products';
import { Subject, Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavContentService {
 
  constructor() { }
  products = products;
  category = categories;

  productCart:any =[];

  private subject$ = new Subject;

  getData(){
    return this.category
  }

  getProduct(_id){
    const objetosFiltrados = this.products.filter(sublevelId => sublevelId.sublevel_id  == _id);  
      return objetosFiltrados;
  }

  enlistCart(product){
    this.productCart.push(product);
    this.subject$.next(this.productCart);
  }
  
  getProductCart():Observable<any>{
    return this.subject$.asObservable();
  }
  

}
