import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-compo',
  templateUrl: './menu-compo.component.html',
  styleUrls: ['./menu-compo.component.css']
})
export class MenuCompoComponent implements OnInit {

  constructor() { }

  objects=[
    {
      name: "olivier",
      lname: "charle",
      company: "itLink"
    },
    {
      name: "adil",
      lname: "cheto",
      company: "itLink"
    },
    {
      name: "jhonas",
      lname: "yhong",
      company: "itlink"
    }
  ]

  ngOnInit() {
  }

}
