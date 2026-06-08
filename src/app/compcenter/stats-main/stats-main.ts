import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface GroupStats {
  id: string;
  name: string;
  value: number;
}

@Component({
  selector: 'app-stats-main',
  imports: [],
  templateUrl: './stats-main.html',
  styleUrl: './stats-main.css',
})
export class StatsMain implements OnInit {
  private http = inject(HttpClient);

  ngOnInit(): void {
    console.log('StatsMain.ngOnInit()');

    this.fetchGroups('https://dummyjson.com/products/category-list').subscribe((categories) => {
      const groups: GroupStats[] = categories.map((category) => ({
        id: category,
        name: category,
        value: Math.floor(Math.random() * 100) + 1,
      }));

      console.log(groups);
      this.groups.set(groups);
    });
  }

  groups = signal<GroupStats[]>([]);
  fetchGroups(url: string): Observable<string[]> {
    return this.http.get<string[]>(url);
  }
  fetchItems(url: string): Observable<string[]> {
    return this.http.get<string[]>(url);
  }
}
