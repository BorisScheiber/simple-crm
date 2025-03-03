import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent,
      ],
      providers: [
        { provide: MatDialog, useValue: { open: () => {} } },
        provideFirebaseApp(() => initializeApp({projectId: 'test'})),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});