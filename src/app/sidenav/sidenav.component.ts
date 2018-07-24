import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormGroup} from '@angular/forms';
import { SidenavContentService } from '../components/sidenav-content.service';
import { CartComponent } from '../components/cart/cart.component';

export interface DialogData {
  name: string;
  price: string;
}



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  numeroItemsCart:any;

  matDialag:MatDialogRef<CartComponent>

  constructor(private _sidenavservice: SidenavContentService, public dialog: MatDialog) {

  }


  ngOnInit() {

    if(localStorage.getItem('other')===null){
    this.numeroItemsCart = this._sidenavservice.getProductCart()
    .subscribe((orden)=> this.numeroItemsCart=orden);

    }else{
     this.numeroItemsCart=  JSON.parse(localStorage.getItem('other'));
     this._sidenavservice.getProductCart()
     .subscribe((orden)=> { 
       
        this.numeroItemsCart.push( orden ) ;
    
    } );
    }   

  }

    options: FormGroup;    
    animal: string;
    name: string;
    
    
    openDialog(): void {
      this.matDialag = this.dialog.open(CartComponent, {
        width:'600px',
        height:'400px',
        data:{product: this.numeroItemsCart}
      });
      
      
  }


}


