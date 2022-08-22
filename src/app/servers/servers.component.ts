import { Component, OnInit } from '@angular/core';

@Component({
  //[app-servers] then app-servers become an attribute - ex: <div app-servers></div>
  //.app-servers then app-servers become a class - ex: <div class="app-servers"></div>
  //app-servers then app-servers become a tag - ex: <app-servers></app-servers>
  selector: 'app-servers', 
  template: `
    <app-server></app-server>
    <app-server></app-server>`, //templateURL for html file, template for literal string
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
