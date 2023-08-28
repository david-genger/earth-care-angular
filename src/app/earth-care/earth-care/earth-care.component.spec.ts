import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthCareComponent } from './earth-care.component';

describe('EarthCareComponent', () => {
  let component: EarthCareComponent;
  let fixture: ComponentFixture<EarthCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
