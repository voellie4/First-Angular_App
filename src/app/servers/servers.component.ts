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
  serverCreated : boolean = false;

  serverCreationStatus : string = "Server was not created.";
  serverName : string = "";

  username : string = "";
  servers = ["server 1","server 2"];

  constructor() { 
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onServerCreated () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server " + this.serverName + " was created";
  }

  // onUpdateServerName(event : Event) {
  //   // console.log(event); //log the event to check element
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onUsernameReset () {
    this.username = "";
  }

  displayParagraph : boolean = false;
  clickCount = 0;
  clickTimes : number[] = [];
  onAssignment3BtnClick(){
    this.clickCount++;
    this.clickTimes.push(this.clickCount);
    this.displayParagraph = !this.displayParagraph;
  }
}
