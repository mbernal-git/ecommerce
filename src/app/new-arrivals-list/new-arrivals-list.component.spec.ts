import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsListComponent } from './new-arrivals-list.component';

describe('NewArrivalsListComponent', () => {
  let component: NewArrivalsListComponent;
  let fixture: ComponentFixture<NewArrivalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrivalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
