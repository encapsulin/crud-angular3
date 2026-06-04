import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compitem } from './compitem';

describe('Compitem', () => {
  let component: Compitem;
  let fixture: ComponentFixture<Compitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
