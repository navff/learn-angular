import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMenuItem: string = 'recipes';

  onMenuClicked(selectedItem: string) {
    this.selectedMenuItem = selectedItem;
  }
}
