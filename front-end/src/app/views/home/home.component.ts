import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qtdeTasks: number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
