import { Component } from '@angular/core';
import { materialModules } from '../shared/material/material';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [materialModules],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

}
