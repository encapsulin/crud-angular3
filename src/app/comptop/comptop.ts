import { Component, inject } from '@angular/core';
import { GlobalStateService } from '../misc/global-state-service';

@Component({
  selector: 'app-comptop',
  imports: [],
  templateUrl: './comptop.html',
  styleUrl: './comptop.css',
})
export class Comptop {
  protected globalStateService = inject(GlobalStateService);
}
