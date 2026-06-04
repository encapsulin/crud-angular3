import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, output, signal } from '@angular/core';

interface Group {
  id: string;
  name: string;
}

@Component({
  selector: 'app-compgroups',
  imports: [],
  templateUrl: './compgroups.html',
  styleUrl: './compgroups.css',
})

export class Compgroups implements OnInit {
  // Inject HttpClient using modern inject() function
  private http = inject(HttpClient);

  // Use a signal to hold the groups array for optimized rendering
  groups = signal<Group[]>([]);

  ngOnInit(): void {
    // Fetch data from DummyJSON
    this.http.get<string[]>('https://dummyjson.com/products/category-list')
      .subscribe({
        next: (categories) => {
          // Map the string array into the { id, name } structure you need
          const formattedGroups = categories.map(category => ({
            id: category,
            name: category
          }));
          
          // Update the signal value
          this.groups.set(formattedGroups);
        },
        error: (err) => {
          console.error('Failed to fetch categories:', err);
        }
      });
  }

  // Define the output emitter (Using modern Angular output signal syntax)
  groupSelected = output<string>(); 

  handleClick(id: string): void {
    this.groupSelected.emit(id); // Send the ID to the parent
    console.log('Selected group ID:', id); // Log the selected ID for debugging
  this.activeGroupId.set(id);
  }

  // 1. Add a local signal to track the active ID, starting with your default 'tops'
  activeGroupId = signal<string>('tops');
}