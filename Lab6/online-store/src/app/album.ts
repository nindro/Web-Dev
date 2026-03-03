import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product';
import { Observable } from 'rxjs';
import { Album, Photo } from './models';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.URL);
  }
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.URL}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.URL}/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.URL}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }
}