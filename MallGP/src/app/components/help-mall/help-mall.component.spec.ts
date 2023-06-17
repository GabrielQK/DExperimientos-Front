import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMallComponent } from './help-mall.component';

describe('HelpMallComponent', () => {
  let component: HelpMallComponent;
  let fixture: ComponentFixture<HelpMallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpMallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
