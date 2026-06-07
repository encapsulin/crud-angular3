import { Component, inject, OnInit, signal } from '@angular/core';
import { Compitems } from './compitems/compitems';
import { ActivatedRoute } from '@angular/router';
import { StatsMain } from './stats-main/stats-main';

@Component({
  selector: 'app-compcenter',
  imports: [Compitems, StatsMain],
  templateUrl: './compcenter.html',
  styleUrl: './compcenter.css',
})
export class Compcenter implements OnInit {
  ngOnInit(): void {}
  private route = inject(ActivatedRoute);

  groupIdToChildren = signal<string>('kitchen-accessories');
}
