import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html'
})
export class ProductItem {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  delete() {
    if (confirm('Вы уверены, что хотите удалить ${this.product.name}?')){
      this.remove.emit(this.product.id);
    }
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри: ' + this.product.link)}`;
    window.open(url, '_blank');
  }
}