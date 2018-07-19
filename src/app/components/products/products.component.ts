import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private sidenavservice: SidenavContentService) { }

  productId:any;
  products:any;

  ngOnInit() {
    // this.products = this.sidenavservice.getProduct();
  }

}
