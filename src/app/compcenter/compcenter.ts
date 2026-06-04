import { Component, OnInit, signal } from '@angular/core';
import { Compgroups } from './compgroups/compgroups';
import { Compitems } from './compitems/compitems';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-compcenter',
  imports: [Compgroups, Compitems],
  templateUrl: './compcenter.html',
  styleUrl: './compcenter.css',
})

export class Compcenter implements OnInit {
  groupIdToItems = signal<string | null>('tops');

  ngOnInit() {

  }

  handleGroupClickInParent(id: string): void {
    console.log('Compcenter.handleGroupClickInParent():', id);
    this.groupIdToItems.set(id); 
  }
}