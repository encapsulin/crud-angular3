import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import {Comptop} from './comptop/comptop';
import { Compcenter } from './compcenter/compcenter';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Comptop, Compcenter, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appcrud');
}
