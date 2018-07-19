import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sublevel-b',
  templateUrl: './sublevel-b.component.html',
  styleUrls: ['./sublevel-b.component.scss']
})
export class SublevelBComponent implements OnInit {

  @Input() sublevelb;

  constructor() { }

  ngOnInit() {
  }

}
