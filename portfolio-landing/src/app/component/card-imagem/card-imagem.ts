import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-imagem',
  imports: [],
  templateUrl: './card-imagem.html',
  styleUrl: './card-imagem.scss'
})
export class CardImagem {
  @Input() descricao!: string;
  @Input() titulo!: string;
  @Input() prioridade!: number;
}
