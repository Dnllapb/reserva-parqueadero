import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasDetailsComponent } from './fincas-details.component';

describe('FincasDetailsComponent', () => {
  let component: FincasDetailsComponent;
  let fixture: ComponentFixture<FincasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FincasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FincasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
