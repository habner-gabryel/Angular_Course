import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Botao } from "../botao/botao";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [Botao, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})
export class Formulario {
  id: number = 0;
  nome: string = '';
  email: string = '';
  idade: number = 0;

  @Output() dadosEnviados = new EventEmitter<Usuario>();

  enviarDados(): void {
    const usuario: Usuario = {
      id: this.id,
      nome: this.nome,
      email: this.email,
      idade: this.idade,
    }

    this.dadosEnviados.emit(usuario);

    this.id = 0;
    this.nome = '';
    this.email = '';
    this.idade = 0;
  }

}
