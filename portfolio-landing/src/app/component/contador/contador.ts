import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss'
})
export class Contador {
  @Output() incrementar = new EventEmitter<void>();
  @Output() decrementar = new EventEmitter<void>();

  funcaoIncrementar(): void {
    this.incrementar.emit();
  }

  funcaoDecrementar(): void {
    this.decrementar.emit();
  }

}
