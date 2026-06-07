import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compleft } from './compleft';

describe('Compleft', () => {
  let component: Compleft;
  let fixture: ComponentFixture<Compleft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compleft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compleft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
