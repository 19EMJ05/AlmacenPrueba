import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaBajaComponent } from './alta-baja.component';

describe('AltaBajaComponent', () => {
  let component: AltaBajaComponent;
  let fixture: ComponentFixture<AltaBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaBajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
