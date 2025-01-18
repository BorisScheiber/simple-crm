import { Component, Inject } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { User } from '../models/user.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [materialModules, FormsModule],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  loading = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    public dialogRef: MatDialogRef<DialogEditAdressComponent>,
     private firestore: Firestore,
  ) {}



  saveUser() {
    console.log(this.user.id);
  }
}
