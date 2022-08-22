import { Component, OnInit } from '@angular/core';

@Component({
  //[app-servers] then app-servers become an attribute - ex: <div app-servers></div>
  //.app-servers then app-servers become a class - ex: <div class="app-servers"></div>
  //app-servers then app-servers become a tag - ex: <app-servers></app-servers>
  selector: 'app-servers', 
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`, //templateURL for html file, template for literal string
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddNewServer : boolean = false;

  serverCreationStatus : string = "Server was not created.";
  serverName : string = "";

  username : string = "";

  constructor() { 
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onServerCreated () {
    this.serverCreationStatus = "Server " + this.serverName + " was created";
  }

  // onUpdateServerName(event : Event) {
  //   // console.log(event); //log the event to check element
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onUsernameReset () {
    this.username = "";
  }

}
