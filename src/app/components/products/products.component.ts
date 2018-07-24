import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';
import 'hammerjs/hammer';
import { Params, ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private sidenavservice: SidenavContentService,
    private route: ActivatedRoute,
   
  ) { 
    }
   
    available = false;

    producttoCart=[];
    products=[];
    
    orden ={} ;
    checked = false;
    disabled = false;
    
    value=50;
    stock=50;
    
    disponible='';

    order = "price";
    reverse = true;

    filter(valor){
      this.orden = valor;
      console.log(this.orden)
    }

    ascen(){
      console.log(this.orden)
    }

    ngOnInit() {
        this.route.params.subscribe(params => 
          this.products = this.sidenavservice.getProduct(params.id));
        

  }


  addtoCart(product){
    this.sidenavservice.enlistCart(product);
    alert(product.name + " agregado con exito!");
  }



}
