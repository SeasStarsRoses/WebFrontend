import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public hello  = 'Hello';
  currenttime : Date = new Date();
  public reloadPage(){
    location.reload(false);
  }
}
