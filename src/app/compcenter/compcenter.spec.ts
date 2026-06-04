import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compcenter } from './compcenter';

describe('Compcenter', () => {
  let component: Compcenter;
  let fixture: ComponentFixture<Compcenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compcenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compcenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
