import { Component, inject, OnInit, signal } from '@angular/core';
import { Compitems } from './products/compitems';
import { ActivatedRoute } from '@angular/router';
import { StatsMain } from './stats-main/stats-main';
import { GlobalStateService } from '../misc/global-state-service';

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

  protected globalState = inject(GlobalStateService);
}
