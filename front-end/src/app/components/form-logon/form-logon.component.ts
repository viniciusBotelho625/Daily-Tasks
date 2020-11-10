import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-logon',
  templateUrl: './form-logon.component.html',
  styleUrls: ['./form-logon.component.css']
})
export class FormLogonComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.authService.login(formValue).subscribe((res) => {
      if (res) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
