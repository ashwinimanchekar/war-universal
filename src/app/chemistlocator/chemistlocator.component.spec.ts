import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistlocatorComponent } from './chemistlocator.component';

describe('ChemistlocatorComponent', () => {
  let component: ChemistlocatorComponent;
  let fixture: ComponentFixture<ChemistlocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistlocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistlocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
