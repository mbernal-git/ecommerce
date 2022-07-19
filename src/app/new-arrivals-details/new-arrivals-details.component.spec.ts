import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsDetailsComponent } from './new-arrivals-details.component';

describe('NewArrivalsDetailsComponent', () => {
  let component: NewArrivalsDetailsComponent;
  let fixture: ComponentFixture<NewArrivalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrivalsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
