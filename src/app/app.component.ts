import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { materialModules } from './shared/material/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, materialModules, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
