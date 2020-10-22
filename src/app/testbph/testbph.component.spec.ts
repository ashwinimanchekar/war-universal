import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbphComponent } from './testbph.component';

describe('TestbphComponent', () => {
  let component: TestbphComponent;
  let fixture: ComponentFixture<TestbphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
