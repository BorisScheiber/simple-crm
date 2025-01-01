import { Component } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [materialModules],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}