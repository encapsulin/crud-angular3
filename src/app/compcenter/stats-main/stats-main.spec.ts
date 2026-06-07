import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMain } from './stats-main';

describe('StatsMain', () => {
  let component: StatsMain;
  let fixture: ComponentFixture<StatsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
