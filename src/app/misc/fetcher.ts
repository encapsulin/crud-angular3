import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Fetcher {
  private http = inject(HttpClient);

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}

// usage:

// import { ApiService } from '../services/api.service';

// private api = inject(ApiService);

// fetchGroups(): void {
//   this.api.get<string[]>(
//     'https://dummyjson.com/products/category-list'
//   ).subscribe({
//     next: (categories) => {
//       const formattedGroups = categories.map(cat => ({
//         id: cat,
//         name: cat
//       }));

//       this.groups.set(formattedGroups);
//     },
//     error: (err) => console.error('Failed to fetch:', err)
//   });
// }