import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagem } from './card-imagem';

describe('CardImagem', () => {
  let component: CardImagem;
  let fixture: ComponentFixture<CardImagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
