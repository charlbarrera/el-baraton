import { Component, OnInit } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';


@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

  categories:any;

  panelOpenState=false;

  detail;

  constructor(private _sidenavservice: SidenavContentService) { }

  ngOnInit() {
    this.categories = this._sidenavservice.getData();
 
  }

  productId(id){
    this.detail = this._sidenavservice.getProduct(id);
  }

}
