import { Component } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { User } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [materialModules, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
 user: User = new User();
 birthDate!: Date; 
 loading = false;


  constructor(
    private firestore: Firestore,
    private dialogRef: MatDialogRef<DialogAddUserComponent>

  ) {}

  async saveUser() {
    this.loading = true;
    try {
      this.user.birthDate = this.birthDate.getTime();
      const usersCollection = collection(this.firestore, 'users');
      const result = await addDoc(usersCollection, this.user.toJSON());
      console.log('Adding user finished, result:', result);
      this.dialogRef.close(); // Dialog schließen nach erfolgreichem Speichern
    } catch (err) {
      console.error('Error adding user:', err);
    } finally {
      this.loading = false;
    }
  }
}
