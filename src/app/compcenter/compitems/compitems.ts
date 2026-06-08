import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { Compitem } from './compitem/compitem';
import { ActivatedRoute } from '@angular/router';
import { Product } from './Product.interface';
import { GlobalStateService } from '../../misc/global-state-service';
import { Subscription } from 'rxjs';

interface DummyJsonResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Component({
  selector: 'app-compitems',
  imports: [Compitem],
  templateUrl: './compitems.html',
  styleUrl: './compitems.css',
})
export class Compitems implements OnInit {
  protected globalStateService = inject(GlobalStateService);

  constructor(private route: ActivatedRoute) {
    effect(() => {
      let id = this.selectedGroupId();
      if (id) {
        this.fetchItemsForGroup(id);
      }
    });

    effect(() => {
      const action = this.globalStateService.action();
      console.log('Compitems received global state change:', action);
      let id = action.split('/').pop();
      if (id) {
        this.fetchItemsForGroup(id);
        this.selectedGroupId.set(id);
      }

      ////////////
      // id = this.selectedGroupIdFromParent();

      // console.log('Compitems received new group ID from parent:', id);

      // this.selectedGroupId.set(id);
      // if (id) {
      //   this.fetchItemsForGroup(id);
      // }
    });
  }

  // Receive the ID from the parent
  selectedGroupIdFromParent = input<string>('tops');
  selectedGroupId = signal<string>('tops');

  ngOnInit(): void {
    console.log('Compitems.ngOnInit()');
  }

  // Use a signal to hold the groups array for optimized rendering
  items = signal<Product[]>([]);

  // Inject HttpClient using modern inject() function
  private http = inject(HttpClient);

  fetchItemsForGroup(id: string) {
    console.log(`Compitems.fetchItemsForGroup(${id})`);
    // Fetch data from DummyJSON
    this.http.get<DummyJsonResponse>('https://dummyjson.com/products/category/' + id).subscribe({
      next: (result) => {
        const formattedItems = result['products'].map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          thumbnail: item.thumbnail,
        }));

        // Update the signal value
        this.items.set(formattedItems);
      },
      error: (err) => {
        console.error('Failed to fetch:', err);
      },
    });
  }
}
