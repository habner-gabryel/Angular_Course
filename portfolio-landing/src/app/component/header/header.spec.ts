import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('verfica se o componente existe', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter um título definido', () => {
    let mockTitulo: string = "Meu Portfólio";

    expect(component.titulo).toBe(mockTitulo);
  });

});
