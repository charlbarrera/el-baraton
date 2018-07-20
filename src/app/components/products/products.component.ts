import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';
import 'hammerjs/hammer';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private sidenavservice: SidenavContentService,
    private route: ActivatedRoute,
   
  ) { 
    }
    private subjet = new Subject<any>();
    producttoCart=[];
    products:any;
    
    orden = "price";
    checked = false;
    disabled = false;
    
    value=50;
    stock=50;
    
    disponible='';

    order = "price";
    reverse = true;

    ascen(){
      console.log(this.orden)
    }

    ngOnInit() {
        this.route.params.subscribe(params => 
          this.products = this.sidenavservice.getProduct(params.id));

         this.subjet.next(this.orden); 
         this.getOrden().subscribe(orden=> this.order=orden);
         console.log(this.order)
  }

  getOrden():Observable<any>{
    return this.subjet.asObservable();
  }

  addtoCart(product){
    this.sidenavservice.enlistCart(product);
  }



}
