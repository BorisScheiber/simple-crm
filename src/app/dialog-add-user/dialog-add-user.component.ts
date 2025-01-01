import { Component } from '@angular/core';
import { materialModules } from '../shared/material/material';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [materialModules],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}
