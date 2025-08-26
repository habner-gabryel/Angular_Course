import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss'
})
export class Botao {
  @Input() texto: string = "Buscar";
  @Output() cique = new EventEmitter<void>();

  aoClicar(): void {
    this.cique.emit();
    console.log("Enviou a emissão");
  }
}
