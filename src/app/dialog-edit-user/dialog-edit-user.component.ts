import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { materialModules } from '../shared/material/material';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [materialModules, FormsModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

    loading = false;
  
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public user: User,
      public dialogRef: MatDialogRef<DialogEditUserComponent>,
         private firestore: Firestore,
    ) {}
  
  
  
    saveUser() {
  
    }
}
