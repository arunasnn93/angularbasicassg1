import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayFlag = false;
  clickLog = [];
  i = 0;

  changeDisplayFlag(){
    this.displayFlag = !this.changeDisplayFlag;
    this.clickLog.push(new Date());
  }
}
