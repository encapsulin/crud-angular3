import { Component, inject, OnInit, output, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Group {
  id: string;
  name: string;
}

@Component({
  selector: 'app-compgroups',
  standalone: true, // Standard for modern Angular (v14+)
  imports: [],
  templateUrl: './compgroups.html',
  styleUrl: './compgroups.css',
})

export class Compgroups implements OnInit {
  // 1. use inject() for all dependencies
  private router = inject(Router);
  private activeRoute= inject(ActivatedRoute);
  private http = inject(HttpClient);

  // 2. State management via Signals
  groups = signal<Group[]>([]);
  activeGroupId = signal<string>('tops');

  // 3. Output emitter
  groupIdFromGroups = output<string>(); 

  ngOnInit(): void {
    // Check this route first; if empty, check the parent route
  const currentRoute = this.activeRoute.parent ? this.activeRoute.parent : this.activeRoute;

    // Sync the activeGroupId signal with the activeRouteparameter
    currentRoute.paramMap.subscribe(params => {
      console.log('Route parameters:', params);
      const groupId = params.get('groupid');
      if (groupId) {
        this.activeGroupId.set(groupId);
      }
    });
  
    // Fetch and map categories
    this.http.get<string[]>('https://dummyjson.com/products/category-list')
      .subscribe({
        next: (categories) => {
          const formattedGroups = categories.map(cat => ({ id: cat, name: cat }));
          this.groups.set(formattedGroups);
        },
        error: (err) => console.error('Failed to fetch categories:', err)
      });
  }

  handleClick(id: string): void {
    console.log('Compgroups.handleClick():', id);
    this.groupIdFromGroups.emit(id); 
    this.activeGroupId.set(id);
    this.router.navigate(['/groups', id]);
  }
}