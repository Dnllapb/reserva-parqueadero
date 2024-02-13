import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasEditComponent } from './fincas-edit.component';

describe('FincasEditComponent', () => {
  let component: FincasEditComponent;
  let fixture: ComponentFixture<FincasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FincasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FincasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
