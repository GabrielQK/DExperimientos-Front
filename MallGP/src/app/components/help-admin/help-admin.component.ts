import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-admin',
  templateUrl: './help-admin.component.html',
  styleUrls: ['./help-admin.component.css']
})
export class HelpAdminComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
