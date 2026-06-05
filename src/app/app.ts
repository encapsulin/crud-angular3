import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import {Comptop} from './comptop/comptop';
import { Compcenter } from './compcenter/compcenter';

@Component({
  selector: 'app-root',
  imports: [Comptop, Compcenter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appcrud');
}
