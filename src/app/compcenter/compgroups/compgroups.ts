import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Group {
  id: string;
  name: string;
}

@Component({
  selector: 'app-compgroups',
  standalone: true, 
  imports: [RouterLink, RouterOutlet],
  templateUrl: './compgroups.html',
  styleUrl: './compgroups.css',
})

export class Compgroups implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

    // 2. State management via Signals
  groups = signal<Group[]>([]);
  groupIdFromParent = input<string>('');
  activeGroupId = signal<string>('');

    // 3. Output emitter
  groupIdToParent = output<string>(); 

  constructor() {}

  ngOnInit(): void {

    console.log('Compgroups.ngOnInit()');

    this.fetchGroups();

    console.log(this.router.url);

    const snapshot = this.route.snapshot;
    console.log({
      url: snapshot.url, 
      params: snapshot.params,
      paramMap: snapshot.paramMap, 
      queryParams: snapshot.queryParams, 
      queryParamMap: snapshot.queryParamMap,
    });

    console.log('groupIdFromParent:', this.groupIdFromParent());
    this.activeGroupId.set(this.groupIdFromParent());

    this.route.params.subscribe(params => {
      console.log("Compgroups1:", params);
    });
  
    this.route.paramMap.subscribe(params => {
      console.log("Compgroups2:", params);
    });

    this.route.queryParams.subscribe(params => {
      console.log("Compgroups3:", params);
      if (params['id']) {
        this.activeGroupId.set(params['id']);
        this.groupIdToParent.emit(params['id']); 
      }
    });

    this.route.queryParamMap.subscribe(params => {
      console.log("Compgroups4:", params);
    });

  }

  fetchGroups(): void {
    console.log('Compgroups.fetchGroups()');

    this.http.get<string[]>('https://dummyjson.com/products/category-list')
      .subscribe({
        next: (categories) => {
          const formattedGroups = categories.map(cat => ({ id: cat, name: cat }));
          this.groups.set(formattedGroups);
        },
        error: (err) => console.error('Failed to fetch:', err)
      });
    }

  handleClick(id: string): void {
    console.log('Compgroups.handleClick():', id);
    this.groupIdToParent.emit(id); 
    this.activeGroupId.set(id);
    // this.router.navigate(['/groups', id]);
    this.router.navigate(['/groups'], {
  queryParams: { id: id }
});
  }
}