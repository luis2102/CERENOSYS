import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchreadComponent } from './searchread.component';

describe('SearchreadComponent', () => {
  let component: SearchreadComponent;
  let fixture: ComponentFixture<SearchreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
