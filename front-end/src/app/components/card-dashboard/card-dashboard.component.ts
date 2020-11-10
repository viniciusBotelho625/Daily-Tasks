import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

  constructor(public modal: ModalComponent) { }

  ngOnInit(): void {
  }
}
