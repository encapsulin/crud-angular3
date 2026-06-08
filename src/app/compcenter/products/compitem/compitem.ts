import { Component, input } from '@angular/core';

import { Product } from '../Product.interface'

@Component({
  selector: 'app-compitem',
  imports: [],
  templateUrl: './compitem.html',
  styleUrl: './compitem.css',
})
export class Compitem {
item = input.required<Product>();
// Use the @Input decorator
  // @Input() item!: Item;
}
