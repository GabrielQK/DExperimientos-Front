import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AforoAdminComponent } from './aforo-admin.component';

describe('AforoAdminComponent', () => {
  let component: AforoAdminComponent;
  let fixture: ComponentFixture<AforoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AforoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AforoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
