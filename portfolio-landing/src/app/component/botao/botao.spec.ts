import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botao } from './botao';

describe('Botao', () => {
  let component: Botao;
  let fixture: ComponentFixture<Botao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter o texto padrão como "Buscar"', () => {
    expect(component.texto).toBe('Buscar');
  });

  it('deve aceitar um texto personalizado via Input', () => {
    const textoPersonalizado = 'Clique Aqui';
    component.texto = textoPersonalizado;
    fixture.detectChanges();

    expect(component.texto).toBe(textoPersonalizado);
  });

  it('deve emitir evento quando clicado', () => {
    const emitSpy = jest.spyOn(component.cique, 'emit');

    component.aoClicar();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('deve logar no console quando clicado', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    component.aoClicar();
    expect(consoleSpy).toHaveBeenCalledWith("Enviou a emissão");
  });

  it('deve renderizar o texto corretamente no template', () => {
    const textoTeste = 'Texto de Teste';
    component.texto = textoTeste;
    fixture.detectChanges();

    const htmlElement: HTMLElement = fixture.nativeElement;
    const button = htmlElement.querySelector('button');

    expect(button?.textContent?.trim()).toBe(textoTeste);
  });

  it('deve ter a classe CSS btn-primary', () => {
    fixture.detectChanges();

    const htmlElement: HTMLElement = fixture.nativeElement;
    const button = htmlElement.querySelector('button');

    expect(button?.classList.contains('btn-primary')).toBe(true);
  });
});
