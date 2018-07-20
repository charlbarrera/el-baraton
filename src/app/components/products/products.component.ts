import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';
import 'hammerjs/hammer';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private sidenavservice: SidenavContentService,
    private route: ActivatedRoute) { }

  producttoCart=[];
  products:any;

  color = 'accent';
  checked = false;
  disabled = false;

  value=50;
    stock=50;

    disponible='';

  ngOnInit() {
    // this.products = this.sidenavservice.getProduct(id);
    const id = +this.route.snapshot.params['id'];
    this.products = this.sidenavservice.getProduct(id);
  }

  addtoCart(product){
    this.sidenavservice.enlistCart(product);
  }



}
