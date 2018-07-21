import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
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

  matBadgeHidden;

  matDialag:MatDialogRef<CartComponent>

  constructor(private _sidenavservice: SidenavContentService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.numeroItemsCart = this._sidenavservice.getProductCart()
    .subscribe((orden)=> this.numeroItemsCart = orden);
  }

  listCart(){
     this.matDialag = this.dialog.open(CartComponent);  
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


