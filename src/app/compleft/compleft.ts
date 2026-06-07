import { Component, OnInit, signal } from '@angular/core';
import { Stats } from './stats/stats';
import { Compgroups } from '../compleft/compgroups/compgroups';

@Component({
  selector: 'app-compleft',
  imports: [Stats, Compgroups],
  templateUrl: './compleft.html',
  styleUrl: './compleft.css',
})
export class Compleft implements OnInit {
  groupIdToChildren = signal<string>('kitchen-accessories');

  ngOnInit() {
    console.log('Compcenter.ngOnInit()');

    // console.log(this.route.snapshot.params);

    // this.route.params.subscribe((params) => {
    //   console.log('Compcenter:', params);
    // });

    // if (this.route.snapshot.params['groupid']) {
    //   this.groupIdToChildren.set(this.route.snapshot.params['groupid']);
    // }
  }

  handleGroupClickInParent(id: string): void {
    console.log('Compcenter.handleGroupClickInParent():', id);
    this.groupIdToChildren.set(id);
  }
}
