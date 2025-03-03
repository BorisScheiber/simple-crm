import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserComponent,
        NoopAnimationsModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: new User()},
        {provide: MatDialogRef, useValue: {open: () => {}}},
        provideFirebaseApp(() => initializeApp({projectId: 'test'})),
        provideFirestore(() => getFirestore()),
        provideNativeDateAdapter()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
