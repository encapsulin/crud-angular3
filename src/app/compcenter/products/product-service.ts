import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  // items: Products = { products: [], total: 0, skip: 0, limit: 0 };

  fetchItemsForGroup(id: string) {
    console.log(`ProductService.fetchItemsForGroup(${id})`);

    return this.http.get<Products>(`https://dummyjson.com/products/category/${id}`);
  }
}
