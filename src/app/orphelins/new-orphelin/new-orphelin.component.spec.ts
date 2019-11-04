import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrphelinComponent } from './new-orphelin.component';

describe('NewOrphelinComponent', () => {
  let component: NewOrphelinComponent;
  let fixture: ComponentFixture<NewOrphelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrphelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrphelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
