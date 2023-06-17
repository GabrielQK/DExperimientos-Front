import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSugerenciaComponent } from './add-sugerencia.component';

describe('AddSugerenciaComponent', () => {
  let component: AddSugerenciaComponent;
  let fixture: ComponentFixture<AddSugerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSugerenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
