import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddperiodComponent } from './addperiod.component';

describe('AddperiodComponent', () => {
  let component: AddperiodComponent;
  let fixture: ComponentFixture<AddperiodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddperiodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
