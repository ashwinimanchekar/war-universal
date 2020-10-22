import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbphComponent } from './addbph.component';

describe('AddbphComponent', () => {
  let component: AddbphComponent;
  let fixture: ComponentFixture<AddbphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
