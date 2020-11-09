import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: null
  }

  constructor( private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createUser(): void {
      this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Cadastro realizado com sucesso!')
      this.router.navigate([''])
    })
  }
}
