import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { Compitem } from './compitem/compitem';

interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface DummyJsonResponse {
  products: {
    id: string;
    title: string;
    description: string;
      price: number;
    [key: string]: any; // Allows other fields without breaking
  }[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-compitems',
  imports: [
    Compitem
   ],
  templateUrl: './compitems.html',
  styleUrl: './compitems.css',
})

export class Compitems implements OnInit {
  // Inject HttpClient using modern inject() function
  private http = inject(HttpClient);

  // Use a signal to hold the groups array for optimized rendering
  items = signal<Item[]>([]);

  ngOnInit(): void {
   
  }

  // Receive the ID from the parent
  selectedGroupId = input<string | null>('tops');

  constructor() {
    // Optional: If you want to run code automatically whenever the ID changes
    effect(() => {
      let id = this.selectedGroupId();
      if (id) {
        this.fetchItemsForGroup(id);
      }
    });
  }

  fetchItemsForGroup(id: string) {
    console.log(`Fetching items for group: ${id}`);
     // Fetch data from DummyJSON
    this.http.get<DummyJsonResponse>('https://dummyjson.com/products/category/'+id)
      .subscribe({
        next: (result) => {

          const formattedItems = result["products"].map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price
          }));
          
          // Update the signal value
          this.items.set(formattedItems);
        },
        error: (err) => {
          console.error('Failed to fetch categories:', err);
        }
      });
  }
}