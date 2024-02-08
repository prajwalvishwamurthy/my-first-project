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
presentUserName = false;
username = ' ';
updateDirective = '';
toggleButton = false;
serversNames = ['TestServer', 'TestServer 2']
constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  },  4000);
}
ngOnInit(): void {}
onCreateServer() {
  this.toggleButton = true;
  this.serversNames.push(this.textInput);
  this.serverCreationStatus ='Server was created' + " " + this.textInput !;
}
onUpdateServerName(event : Event) {
  this.textInput = (<HTMLInputElement>event.target).value;
} 

updateUserName (event :Event) {
  this.username = (<HTMLInputElement>event.target).value;
}

}
