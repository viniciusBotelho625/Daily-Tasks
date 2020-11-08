import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-login');
  }

  navigateToRegister(): void {
    this.router.navigate(['/cadastro'])
    document.body.classList.add('bg-register');
  }
}