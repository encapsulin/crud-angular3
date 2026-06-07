import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalStateService } from '../../misc/global-state-service';

@Component({
  selector: 'app-stats',
  imports: [RouterLink],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  protected globalState = inject(GlobalStateService);
}
