import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversaltestcompComponent } from './universaltestcomp.component';

describe('UniversaltestcompComponent', () => {
  let component: UniversaltestcompComponent;
  let fixture: ComponentFixture<UniversaltestcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversaltestcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversaltestcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
