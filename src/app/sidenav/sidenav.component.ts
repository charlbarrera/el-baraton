import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { SidenavContentService } from '../components/sidenav-content.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  numeroItemsCart:any;

  constructor(private _sidenavservice: SidenavContentService) {
  }

  ngOnInit() {
    this.numeroItemsCart = this._sidenavservice.getProductCart();
  }

  listCart(){
    this.numeroItemsCart = this._sidenavservice.getProductCart();
    console.log(this.numeroItemsCart)
  }
  options: FormGroup;




}


