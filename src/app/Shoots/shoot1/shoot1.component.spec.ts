import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoot1Component } from './shoot1.component';

describe('Shoot1Component', () => {
  let component: Shoot1Component;
  let fixture: ComponentFixture<Shoot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shoot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shoot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
