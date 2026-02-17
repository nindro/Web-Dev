import {Routes} from '@angular/router';

import {Home} from './13home/home';
import {User} from './13user/user';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: Home,
    },
    {
        path: 'user',
        title: 'App User Page',
        component: User,
    },
];
