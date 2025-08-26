import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastro } from './pagina-cadastro';

describe('PaginaCadastro', () => {
  let component: PaginaCadastro;
  let fixture: ComponentFixture<PaginaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
