import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';
import 'hammerjs/hammer';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private sidenavservice: SidenavContentService,
    private route: ActivatedRoute) { }
   
   products=[];
    
    orden ={} ;

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
