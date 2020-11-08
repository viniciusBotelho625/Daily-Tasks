import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    document.body.classList.add('bg-register');
  }
}
