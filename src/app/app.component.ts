import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { clock } from './models/clocks-interface';
import { ClocksService } from './services/clocks-service.service';
import { ClockFormComponentComponent } from "./clock-form-component/clock-form-component.component";
import { ClockDisplayComponentComponent } from "./clock-display-component/clock-display-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ClockFormComponentComponent, ClockDisplayComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
