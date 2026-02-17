import {Component} from '@angular/core';
import {User} from './8user';

@Component({
    selector: 'app-root',
    template: ` <app-user [occupation]="occupation"/> `,
    imports: [User],
})
export class App {
    occupation = "Simran";
}
