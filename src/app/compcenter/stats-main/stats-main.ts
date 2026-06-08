import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

interface GroupStats {
  id: string;
  name: string;
  value: number;
  width: number;
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
      const requests = categories.map((category) =>
        this.http.get<any>(`https://dummyjson.com/products/category/${category}`).pipe(
          map((result) => ({
            id: category,
            name: category,
            value: result.products.length,
          })),
        ),
      );

      forkJoin(requests).subscribe((groups: Omit<GroupStats, 'width'>[]) => {
        const max = Math.max(...groups.map((g) => g.value));

        const withWidth: GroupStats[] = groups.map((g) => ({
          ...g,
          width: max ? (g.value / max) * 100 : 0,
        }));

        const sorted = [...withWidth].sort((a, b) => b.value - a.value);

        this.groups.set(sorted);
      });
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
