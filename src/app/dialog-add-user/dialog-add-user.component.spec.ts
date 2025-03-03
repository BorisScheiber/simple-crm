import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { open: () => {} } },
        provideFirebaseApp(() => initializeApp({projectId: 'test'})),
        provideFirestore(() => getFirestore()),
        provideNativeDateAdapter()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
