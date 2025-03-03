import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of({get: () => 'test'})}},
        { provide: MAT_DIALOG_DATA, useValue: new User() },
        provideFirebaseApp(() => initializeApp({projectId: 'test'})),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
