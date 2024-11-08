import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { clock } from './models/clocks-interface';
import { ClocksService } from './services/clocks-service.service';
import { SettingsComponentComponent } from "./settings-component/settings-component.component";
import { ClocksComponentComponent } from "./clocks-component/clocks-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SettingsComponentComponent, ClocksComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
