import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-main',
  imports: [],
  templateUrl: './stats-main.html',
  styleUrl: './stats-main.css',
})
export class StatsMain implements OnInit {
  ngOnInit(): void {
    console.log('StatsMain.ngOnInit()');
    let groups: string[] = fetchGroups('https://dummyjson.com/products/category-list');
    for (let group of groups) {
      console.log('Group: ' + group);
    }
  }
}
function fetchGroups(arg0: string): string[] {
  console.log('fetchGroups()');
  // Simulate fetching groups from an API
  return ['Group A', 'Group B', 'Group C'];
}
