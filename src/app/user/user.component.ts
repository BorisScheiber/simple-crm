import { Component, OnDestroy, OnInit } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [materialModules, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[] = [];
  unsubUsers: (() => void) | undefined;   // Funktion zum Beenden des Listeners
 

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore
  ) {
  }

  ngOnInit() {
    // Collection-Referenz erstellen (entspricht .collection('users'))
    const usersCollection = collection(this.firestore, 'users');
    
    // Live-Updates abonnieren (entspricht .valueChanges())
    this.unsubUsers = onSnapshot(usersCollection, (snapshot) => {
    this.users = [];
    
    snapshot.forEach((doc) => {
      const userData = {
        ...doc.data(),    // Packt firstName, lastName etc. aus
        id: doc.id        // Fügt die Firestore-ID hinzu
      };
      this.users.push(new User(userData));
    });
    
    console.log('Users mit IDs:', this.users);
  });
  }

  ngOnDestroy() {
    // Aufräumen wenn die Komponente zerstört wird
    if (this.unsubUsers) {
      this.unsubUsers();
    }
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
