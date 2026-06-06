import { Component, inject, OnInit, signal } from '@angular/core';
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

  private route = inject(ActivatedRoute);

  groupIdToChildren = signal<string>('kitchen-accessories');
  
  ngOnInit() {

    console.log('Compcenter.ngOnInit()');

    console.log(this.route.snapshot.params);

    this.route.params.subscribe(params => {
      console.log("Compcenter:", params);
    });

    if (this.route.snapshot.params['groupid']) {
      this.groupIdToChildren.set(this.route.snapshot.params['groupid']);
    }

  }

  handleGroupClickInParent(id: string): void {
    console.log('Compcenter.handleGroupClickInParent():', id);
    this.groupIdToChildren.set(id); 
  }
}