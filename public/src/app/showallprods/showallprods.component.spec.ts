import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallprodsComponent } from './showallprods.component';

describe('ShowallprodsComponent', () => {
  let component: ShowallprodsComponent;
  let fixture: ComponentFixture<ShowallprodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallprodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallprodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
