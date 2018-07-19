import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sublevel-c',
  templateUrl: './sublevel-c.component.html',
  styleUrls: ['./sublevel-c.component.scss']
})
export class SublevelCComponent implements OnInit {

  @Input() sublevelc;

  constructor() { }

  ngOnInit() {
  }

}
