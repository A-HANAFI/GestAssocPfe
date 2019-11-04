import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphelinsLierComponent } from './orphelins-lier.component';

describe('OrphelinsLierComponent', () => {
  let component: OrphelinsLierComponent;
  let fixture: ComponentFixture<OrphelinsLierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrphelinsLierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphelinsLierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
