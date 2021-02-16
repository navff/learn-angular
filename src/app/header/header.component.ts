import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  @Output() selectMenu = new EventEmitter<string>();
  selectedItem: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
