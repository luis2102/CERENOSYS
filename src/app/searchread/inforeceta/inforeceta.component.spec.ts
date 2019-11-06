import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforecetaComponent } from './inforeceta.component';

describe('InforecetaComponent', () => {
  let component: InforecetaComponent;
  let fixture: ComponentFixture<InforecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
