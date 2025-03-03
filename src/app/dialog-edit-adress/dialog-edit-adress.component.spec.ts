import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAdressComponent } from './dialog-edit-adress.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditAdressComponent,
        NoopAnimationsModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: new User()},
        {provide: MatDialogRef, useValue: {open: () => {}}},
        provideFirebaseApp(() => initializeApp({projectId: 'test'})),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
