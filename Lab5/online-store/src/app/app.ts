import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedCategoryId: number | null = null;
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  selectedCategoryName: string = '';

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number){
    this.selectedCategoryId = id;
    this.selectedProducts = this.productService.getProductsByCategory(id);
    console.log(this.categories);
  }
}