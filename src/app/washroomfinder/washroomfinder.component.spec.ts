import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashroomfinderComponent } from './washroomfinder.component';

describe('WashroomfinderComponent', () => {
  let component: WashroomfinderComponent;
  let fixture: ComponentFixture<WashroomfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashroomfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashroomfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
