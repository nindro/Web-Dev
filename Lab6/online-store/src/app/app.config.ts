import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Your routes file
import { provideHttpClient } from '@angular/common/http'; // Must add this!

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // This allows the AlbumService to work
  ]
};