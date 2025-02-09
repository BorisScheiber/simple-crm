import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { materialModules } from '../shared/material/material';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.class';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [materialModules, FormsModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

    loading = false;
    birthDate!: Date;
  
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public user: User,
      public dialogRef: MatDialogRef<DialogEditUserComponent>,
         private firestore: Firestore,
    ) {
      // Beim Öffnen des Dialogs: Timestamp in Date umwandeln für den Datepicker
      this.birthDate = new Date(this.user.birthDate);
    }
  
  
  
    async saveUser() {
    if (!this.user.id) {
         console.error('No user id found');
         return;
       }
   
       this.loading = true;
   
       try {
         const userDoc = doc(this.firestore, 'users', this.user.id);
   
         const updateData = {
           firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            birthDate: this.birthDate.getTime(),
         };
   
         await updateDoc(userDoc, updateData);
         this.dialogRef.close();
       } catch (error) {
         console.error('Error while saving user data:', error);
       } finally {
         this.loading = false;
       }
    }
}
