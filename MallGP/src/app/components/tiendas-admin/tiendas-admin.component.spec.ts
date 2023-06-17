import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasAdminComponent } from './tiendas-admin.component';

describe('TiendasAdminComponent', () => {
  let component: TiendasAdminComponent;
  let fixture: ComponentFixture<TiendasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
