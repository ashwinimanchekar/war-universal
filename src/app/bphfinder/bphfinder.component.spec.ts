import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BphfinderComponent } from './bphfinder.component';

describe('BphfinderComponent', () => {
  let component: BphfinderComponent;
  let fixture: ComponentFixture<BphfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BphfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BphfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
