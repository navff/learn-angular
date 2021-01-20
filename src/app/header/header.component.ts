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

  onMenuClick($event: any) {
    const targetPage = $event.target.dataset.navigate_to;
    if (!targetPage) {
      return;
    }
    if (this.selectedItem &&
      this.selectedItem.classList &&
      this.selectedItem.classList.contains("active")) {
      this.selectedItem.classList.remove("active");

    }
    this.selectMenu.emit(targetPage);
    this.selectedItem = <HTMLLinkElement>$event.target;
    this.selectedItem.classList.add('active');
  }

}
