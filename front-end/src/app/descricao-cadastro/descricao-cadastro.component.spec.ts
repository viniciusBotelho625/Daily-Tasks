import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoCadastroComponent } from './descricao-cadastro.component';

describe('DescricaoCadastroComponent', () => {
  let component: DescricaoCadastroComponent;
  let fixture: ComponentFixture<DescricaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
