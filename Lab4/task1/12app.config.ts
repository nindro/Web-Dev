import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './12.app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
};
