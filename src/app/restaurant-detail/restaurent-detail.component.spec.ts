import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurent-detail.component';

describe('RestaurentDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
