import { Component } from '@angular/core';

@Component({
  selector: 'apps-roots', // this is the tag at where we display the html
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name = 'my-first-project';
}
