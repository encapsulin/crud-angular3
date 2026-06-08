import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { Compitem } from './compitem/compitem';
import { ActivatedRoute } from '@angular/router';
import { Product, Products } from './Product.interface';
import { GlobalStateService } from '../../misc/global-state-service';
import { ProductService } from './product-service';

@Component({
  selector: 'app-compitems',
  imports: [Compitem],
  templateUrl: './compitems.html',
  styleUrl: './compitems.css',
})
export class Compitems implements OnInit {
  protected globalStateService = inject(GlobalStateService);
  productService = inject(ProductService);

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

  fetchItemsForGroup(groupId: string) {
    console.log(`Compitems.fetchItemsForGroup(${groupId})`);
    this.productService.fetchItemsForGroup(groupId).subscribe({
      next: (result) => {
        this.items.set(result.products);
      },
      error: (err) => {
        console.error('Failed to fetch:', err);
      },
    });
  }
}
