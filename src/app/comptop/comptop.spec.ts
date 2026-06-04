import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comptop } from './comptop';

describe('Comptop', () => {
  let component: Comptop;
  let fixture: ComponentFixture<Comptop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comptop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comptop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
