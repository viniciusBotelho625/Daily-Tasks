import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  users: any

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    document.body.classList.add('bg-register');
  }
}
