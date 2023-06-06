import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceGetComponent } from './expence-get.component';

describe('ExpenceGetComponent', () => {
  let component: ExpenceGetComponent;
  let fixture: ComponentFixture<ExpenceGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenceGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenceGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
