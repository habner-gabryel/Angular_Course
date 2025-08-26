import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContagem } from './pagina-contagem';

describe('PaginaContagem', () => {
  let component: PaginaContagem;
  let fixture: ComponentFixture<PaginaContagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaContagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaContagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
