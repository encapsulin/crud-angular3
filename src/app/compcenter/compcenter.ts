import { Component, signal } from '@angular/core';
import { Compgroups } from './compgroups/compgroups';
import { Compitems } from './compitems/compitems';
  
@Component({
  selector: 'app-compcenter',
  imports: [Compgroups, Compitems],
  templateUrl: './compcenter.html',
  styleUrl: './compcenter.css',
})
export class Compcenter {
// Use a signal to hold the active ID (initialized as null or empty string)
  selectedGroupId = signal<string | null>("tops");

  handleGroupClickInParent(id: string): void {
    console.log('Received ID from child component:', id);
    this.selectedGroupId.set(id); // Update the signal with the new ID
  }
}
