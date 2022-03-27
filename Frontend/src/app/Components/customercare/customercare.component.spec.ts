import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercareComponent } from './customercare.component';

describe('CustomercareComponent', () => {
  let component: CustomercareComponent;
  let fixture: ComponentFixture<CustomercareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
