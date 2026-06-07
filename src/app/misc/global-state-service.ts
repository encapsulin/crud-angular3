import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  // Define a private signal to hold the state
  private _action = signal<string>('');

  // Expose it as a read-only signal so components can't mutate it directly
  readonly action = this._action.asReadonly();

  // Method to update the state
  toggleAction(action: string): void {
    this._action.update((current) => action);
    console.log('GlobalStateService.toggleAction():', action);
  }
}
