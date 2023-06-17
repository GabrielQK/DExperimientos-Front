import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-mall',
  templateUrl: './help-mall.component.html',
  styleUrls: ['./help-mall.component.css']
})
export class HelpMallComponent implements OnInit {
  
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
