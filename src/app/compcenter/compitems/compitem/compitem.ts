import { Component, input } from '@angular/core';

interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-compitem',
  imports: [],
  templateUrl: './compitem.html',
  styleUrl: './compitem.css',
})
export class Compitem {
item = input.required<Item>();
// Use the @Input decorator
  // @Input() item!: Item;
}
