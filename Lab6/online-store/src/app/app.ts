import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product';
import { Observable } from 'rxjs';
import { Album, Photo } from './models';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
@Injectable({ providedIn: 'root'})

export class App {
  title = 'album-browser';
}