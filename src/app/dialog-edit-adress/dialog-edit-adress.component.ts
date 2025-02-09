import { Component, Inject } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { User } from '../models/user.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

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



  async saveUser() {

    if (!this.user.id) {
      console.error('No user id found');
      return;
    }

    this.loading = true;

    try {
      const userDoc = doc(this.firestore, 'users', this.user.id);

      const updateData = {
        street: this.user.street,
        zipCode: this.user.zipCode,
        city: this.user.city,
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
