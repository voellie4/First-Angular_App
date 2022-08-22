import { Component } from "@angular/core";

@Component ({
    selector: 'app-server',
    templateUrl: "./server.component.html",
    styles: [`.online {color: white;}`]
})


export class ServerComponent{
    serverId : number = 4;
    serverStatus : string = "Offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5? "Online":"Offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    setColor() {
        return this.serverStatus === "Online"? "green":"grey"
    }
}
