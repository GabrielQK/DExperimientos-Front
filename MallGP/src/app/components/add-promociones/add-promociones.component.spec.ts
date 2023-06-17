import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromocionesComponent } from './add-promociones.component';

describe('AddPromocionesComponent', () => {
  let component: AddPromocionesComponent;
  let fixture: ComponentFixture<AddPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromocionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
