import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compgroups } from './compgroups';

describe('Compgroups', () => {
  let component: Compgroups;
  let fixture: ComponentFixture<Compgroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compgroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compgroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
