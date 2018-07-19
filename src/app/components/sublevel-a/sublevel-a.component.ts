import { Component, OnInit, Input } from '@angular/core';
import { SidenavContentService } from '../sidenav-content.service';

@Component({
  selector: 'app-sublevel-a',
  templateUrl: './sublevel-a.component.html',
  styleUrls: ['./sublevel-a.component.scss']
})
export class SublevelAComponent implements OnInit {

  @Input() sublevels;

  categoryb = false;

  detail:any;

  constructor(private _service:SidenavContentService) { }

  ngOnInit() {
  }

  productId(id){
    
    console.log(this._service.getProduct(id));
    console.log(id)
  }

}
