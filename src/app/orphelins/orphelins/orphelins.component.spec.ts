import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphelinsComponent } from './orphelins.component';

describe('OrphelinsComponent', () => {
  let component: OrphelinsComponent;
  let fixture: ComponentFixture<OrphelinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphelinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphelinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
