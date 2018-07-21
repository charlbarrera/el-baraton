import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList:any=[];

  constructor( private cartservice: SidenavContentService) { }

  ngOnInit() {
   this.cartList =  this.cartservice.productCart
   
  }

}
