import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevoleLierComponent } from './benevole-lier.component';

describe('BenevoleLierComponent', () => {
  let component: BenevoleLierComponent;
  let fixture: ComponentFixture<BenevoleLierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevoleLierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevoleLierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
