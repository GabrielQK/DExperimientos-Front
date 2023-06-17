import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMallComponent } from './maps-mall.component';

describe('MapsMallComponent', () => {
  let component: MapsMallComponent;
  let fixture: ComponentFixture<MapsMallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsMallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
