import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Tasks } from 'src/app/models/task.interface';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  tasks: Tasks

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onLogout(): void {
    this.authService.logout();
  }
}
