import { Component, OnInit } from '@angular/core';
import { materialModules } from '../shared/material/material';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [materialModules],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit() {
    // Id aus der Url holen
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
      console.log('Id from Url is', this.userId);
      this.loadUser();
    });
  }

  loadUser() {
    // Referenz auf das Dokument
    const userDoc = doc(this.firestore, 'users', this.userId);

    //Live updates vom User-Dokument abonnieren
    onSnapshot(userDoc, (doc) => {
      if (doc.exists()) {
        // User Daten mit Id kombinieren
        const userData = {
          id: doc.id,
          ...doc.data(),
        };
        this.user = new User(userData);
      }
    });
  }
}
