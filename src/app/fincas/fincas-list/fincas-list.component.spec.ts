import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincasListComponent } from './fincas-list.component';

describe('FincasListComponent', () => {
  let component: FincasListComponent;
  let fixture: ComponentFixture<FincasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FincasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FincasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
