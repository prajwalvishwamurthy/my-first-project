import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created!';
textInput = 'TestServer';
constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  },  4000);
}
ngOnInit(): void {}
onCreateServer() {
  this.serverCreationStatus ='Server was created' + " " + this.textInput !;
}
onUpdateServerName(event : Event) {
  this.textInput = (<HTMLInputElement>event.target).value;
} 
}
