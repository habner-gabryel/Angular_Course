import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario } from './formulario';
import { Botao } from '../botao/botao';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../model/usuario';

describe('Formulario', () => {
  let component: Formulario;
  let fixture: ComponentFixture<Formulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, Botao, Formulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com valores padrão', () => {
    expect(component.id).toBe(0);
    expect(component.nome).toBe('');
    expect(component.email).toBe('');
    expect(component.idade).toBe(0);
  });

  it('deve emitir dados do usuário quando enviarDados for chamado', () => {
    component.id = 1;
    component.nome = "Habner Gabryel";
    component.email = "habner@alunos.utfpr.edu.br";
    component.idade = 23;

    const emitSpy = jest.spyOn(component.dadosEnviados, 'emit');

    component.enviarDados();

    expect(emitSpy).toHaveBeenCalledWith({
      id: 1,
      nome: "Habner Gabryel",
      email: "habner@alunos.utfpr.edu.br",
      idade: 23
    } as Usuario);
  });

  it('deve resetar os campos após enviar os dados', () => {
    component.id = 1;
    component.nome = "Habner Gabryel";
    component.email = "habner@alunos.utfpr.edu.br";
    component.idade = 23;

    component.enviarDados();

    expect(component.id).toBe(0);
    expect(component.nome).toBe('');
    expect(component.email).toBe('');
    expect(component.idade).toBe(0);
  });


  it('deve renderizar os campos do formulario corretamente', () => {
    component.id = 123;
    component.nome = "Habner Gabryel";
    component.email = "habner@alunos.utfpr.edu.br";
    component.idade = 23;

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const idInput = compiled.querySelector('input[type="number"][id="id"]');
    expect(idInput?.value).toBe('123');

    const nomeInput = compiled.querySelector('input[type="text"][id="nome"]');
    expect(nomeInput?.value).toBe('Habner Gabryel');

    const emailInput = compiled.querySelector('input[type="text"][id="email"]');
    expect(emailInput?.value).toBe('habner@alunos.utfpr.edu.br');

    const idadeInput = compiled.querySelector('input[type="number"][id="idade"]');
    expect(idadeInput?.value).toBe('23');
  });

  it('deve ter labels para todos os campos', () => {
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const labels = compiled.querySelectorAll('label');
    
    expect(labels.length).toBe(4);
    expect(labels[0].textContent).toContain('ID:');
    expect(labels[1].textContent).toContain('Nome:');
    expect(labels[2].textContent).toContain('E-mail:');
    expect(labels[3].textContent).toContain('Idade:');
  });

  it('deve conter o botão com texto "Enviar Dados"', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const botao = compiled.querySelector('app-botao');

    expect(botao).toBeTruthy();
  });

  it('deve estar dentro de um contanier com classe form-container', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const container = compiled.querySelector('.form-container');

    expect(container).toBeTruthy();
  });
});
