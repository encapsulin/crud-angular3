import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { Compitem } from './compitem/compitem';
import { ActivatedRoute } from '@angular/router';

import { Product } from './Product.interface'

interface DummyJsonResponse {
  products: Product[];
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

  ngOnInit(): void {

    console.log("Compitems.ngOnInit()");

    this.route.params.subscribe(params => {
      console.log("Compitems1:", params);
    });
  
    this.route.paramMap.subscribe(params => {
      console.log("Compitems2:", params);
    });

    this.route.queryParams.subscribe(params => {
      console.log("Compitems3:", params);
    });

    this.route.queryParamMap.subscribe(params => {
      console.log("Compitems4:", params);
    });
  }

    // Use a signal to hold the groups array for optimized rendering
  items = signal<Product[]>([]);

  // Inject HttpClient using modern inject() function
  private http = inject(HttpClient);

  // Receive the ID from the parent
  selectedGroupId = input<string | null>('tops');

  constructor(private route: ActivatedRoute) {
    // Optional: If you want to run code automatically whenever the ID changes
    effect(() => {
      let id = this.selectedGroupId();
      if (id) {
        this.fetchItemsForGroup(id);
      }
    });
  }

  fetchItemsForGroup(id: string) {
    console.log(`Compitems.fetchItemsForGroup(${id})`);
     // Fetch data from DummyJSON
    this.http.get<DummyJsonResponse>('https://dummyjson.com/products/category/'+id)
      .subscribe({
        next: (result) => {

          const formattedItems = result["products"].map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            thumbnail: item.thumbnail
          }));
          
          // Update the signal value
          this.items.set(formattedItems);
        },
        error: (err) => {
          console.error('Failed to fetch:', err);
        }
      });
  }
}