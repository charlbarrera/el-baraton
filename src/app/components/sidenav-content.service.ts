import { Injectable } from '@angular/core';

import { categories } from './categories';
import { products } from './products';
import { Subject, Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavContentService {
 
  constructor() { 
    let price;
    price =this.products;
    
    for(let i=0; i<price.length; i++){

      price[i].price = parseInt(price[i].price.substr(1).replace(/,/g, ''));

  }
  }
  products = products;
  category = categories;

  editarCantidad:Number;

  productCart:any =[];


  private subject$ = new Subject;

  getData(){
    return this.category
  }

  getProducts(){
    if(localStorage.getItem('other')===null){
      return this.productCart;
    }else{

      this.productCart= JSON.parse(localStorage.getItem('other'));

    }
    return this.productCart;
  }

  deleteProductOfCart(product){
      let data=[];
    if(localStorage.getItem('other')===null){
      let i = this.productCart.indexOf(product);
      this.productCart.splice(i,1);
    }
    else{
        data =JSON.parse(localStorage.getItem('other'));
      let i = data.findIndex(function(obj){ return obj.name == product.name});
        data.splice(i,1);
        this.productCart = data;
      localStorage.setItem('other', JSON.stringify(this.productCart)); 
      }

  }


  getProduct(_id){
    const objetosFiltrados = this.products.filter(sublevelId => sublevelId.sublevel_id  == _id);  
      return objetosFiltrados;
  }

  enlistCart(product){
    product.cantidad = 1;
    this.productCart.push(product);
    this.subject$.next(this.productCart);
    let products;
    if (localStorage.getItem('other')===null){
      products = [];
      products.push(product);
      localStorage.setItem('other', JSON.stringify(products));
    }else{
      products= JSON.parse(localStorage.getItem('other'));
      products.push(product);
      localStorage.setItem('other', JSON.stringify(products));
    }
  }
  
  comprarCart(){
    if(confirm('seguro que quieres comprar: '+ this.productCart.map(name=>name.name)+' ?')){
      alert('Compra exitosa!');
      this.productCart = JSON.parse(localStorage.getItem('other'));
      this.productCart = [];
      localStorage.setItem('other', JSON.stringify(this.productCart));
    }else{

    }

  }


  getProductCart():Observable<any>{
    return this.subject$.asObservable();
  }
  
  editarCant(num:Number){
      this.editarCantidad = num;
  }

  getCant(){
    return this.editarCantidad;
  }
}
