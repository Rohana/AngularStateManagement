import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersViewComponent } from './customers-view.component';

describe('CustomersViewComponent', () => {
  let component: CustomersViewComponent;
  let fixture: ComponentFixture<CustomersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
