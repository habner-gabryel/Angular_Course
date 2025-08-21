import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-imagem',
  imports: [],
  templateUrl: './card-imagem.html',
  styleUrl: './card-imagem.scss'
})
export class CardImagem {
  @Input() descricaoImagem!: string;


  @Output() imagemFoiClicada = new EventEmitter<boolean>();
  valorOut: boolean = false;


  clicarImagem(): void {
    this.valorOut = !this.valorOut;

    this.imagemFoiClicada.emit(this.valorOut);
  }

}
