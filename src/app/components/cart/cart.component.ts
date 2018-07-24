import { Component, OnInit, Inject } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList:any=[];
  total:number;


  constructor( private cartservice: SidenavContentService,
    public dialogRef: MatDialogRef<CartComponent>) { 

  }

  ngOnInit() {

    this.cartList= this.cartservice.getProducts();
 
    for(let i = 0; i<this.cartList.length; i++ ){

        this.cartList[i].editarCantidad = this.cartservice.getCant();
    }
  }

  comprar(){
    this.cartservice.comprarCart();
    this.dialogRef.close();
  }

  delete(product){
    this.cartservice.deleteProductOfCart(product);
    this.cartList = this.cartservice.getProducts();
  }

  editar(pro){
    pro.editable = !pro.editable;
    this.cartservice.editarCant(pro);

  }

}
