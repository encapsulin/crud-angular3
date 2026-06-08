import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compitems } from './compitems';

describe('Compitems', () => {
  let component: Compitems;
  let fixture: ComponentFixture<Compitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
