import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasCreateComponent } from './fincas-create.component';

describe('FincasCreateComponent', () => {
  let component: FincasCreateComponent;
  let fixture: ComponentFixture<FincasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FincasCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FincasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
