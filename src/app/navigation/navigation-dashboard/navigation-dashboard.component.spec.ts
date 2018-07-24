import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDashboardComponent } from './navigation-dashboard.component';

describe('NavigationDashboardComponent', () => {
  let component: NavigationDashboardComponent;
  let fixture: ComponentFixture<NavigationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
