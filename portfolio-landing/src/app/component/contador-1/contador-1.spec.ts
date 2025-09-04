import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador1 } from './contador-1';

describe('Contador1', () => {
  let component: Contador1;
  let fixture: ComponentFixture<Contador1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
