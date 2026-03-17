import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    console.log('Запрос пошел...');
  this.albumService.getAlbums().subscribe({
    next: (data) => {
      console.log('Данные получены:', data);
      this.albums = data;
      this.loading = false;
    },
    error: (err) => {
      console.error('Ошибка при загрузке:', err);
      this.loading = false; // Убираем загрузку, даже если ошибка
    }
  });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
}