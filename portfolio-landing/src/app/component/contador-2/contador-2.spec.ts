import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador2 } from './contador-2';

describe('Contador2', () => {
  let component: Contador2;
  let fixture: ComponentFixture<Contador2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
