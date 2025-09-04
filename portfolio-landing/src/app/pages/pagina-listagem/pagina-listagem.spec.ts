import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListagem } from './pagina-listagem';

describe('PaginaListagem', () => {
  let component: PaginaListagem;
  let fixture: ComponentFixture<PaginaListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaListagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaListagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
