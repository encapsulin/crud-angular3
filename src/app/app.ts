import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { Comptop } from './comptop/comptop';
import { Compcenter } from './compcenter/compcenter';
import { RouterOutlet } from '@angular/router';
import { Compleft } from './compleft/compleft';
@Component({
  selector: 'app-root',
  imports: [Comptop, Compleft, Compcenter, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('appcrud');

  action = signal<string>('');
  handleActionInParent(action: string): void {
    this.action.set(action);
  }
}
