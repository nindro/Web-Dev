import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
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
  share(platform: string) {
  const text = encodeURIComponent(`Check this out: ${this.product.name}`);
  const url = encodeURIComponent(this.product.link);
  
  let finalUrl = '';
  
  if (platform === 'wa') {
    finalUrl = `https://wa.me/?text=${text}%20${url}`;
  } else if (platform === 'tg') {
    finalUrl = `https://t.me/share/url?url=${url}&text=${text}`;
  }
  
  window.open(finalUrl, '_blank');
}
  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри: ' + this.product.link)}`;
    window.open(url, '_blank');
  }
}