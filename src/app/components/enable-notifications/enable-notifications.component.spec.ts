import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableNotificationsComponent } from './enable-notifications.component';

describe('EnableNotificationsComponent', () => {
  let component: EnableNotificationsComponent;
  let fixture: ComponentFixture<EnableNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
