import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrphelinComponent } from './list-orphelin.component';

describe('ListOrphelinComponent', () => {
  let component: ListOrphelinComponent;
  let fixture: ComponentFixture<ListOrphelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrphelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrphelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
