import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls : ['./server.component.css']
}) 
export class ServerComponent {
    serverId = 10;
    serverStatus: string ="offline"
    getServerStatus () {
        return `this is server method that is executed on `
    }
}