import {Component, inject} from '@angular/core';
import {CarService} from './19.car.service';

@Component({
    selector: 'app-root',
    template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
    carService = inject(CarService);
}
