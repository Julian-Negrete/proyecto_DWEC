import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemarioTarjetaComponent } from './temario-tarjeta.component';

describe('TemarioTarjetaComponent', () => {
  let component: TemarioTarjetaComponent;
  let fixture: ComponentFixture<TemarioTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemarioTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemarioTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
