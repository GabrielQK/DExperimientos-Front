import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMallAdminComponent } from './maps-mall-admin.component';

describe('MapsMallAdminComponent', () => {
  let component: MapsMallAdminComponent;
  let fixture: ComponentFixture<MapsMallAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsMallAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsMallAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
