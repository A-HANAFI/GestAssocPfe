import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrphelinComponent } from './add-orphelin.component';

describe('AddOrphelinComponent', () => {
  let component: AddOrphelinComponent;
  let fixture: ComponentFixture<AddOrphelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrphelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrphelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
