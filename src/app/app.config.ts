import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-27075","appId":"1:1026678219764:web:825d238bfd99267f600fa1","storageBucket":"simple-crm-27075.firebasestorage.app","apiKey":"AIzaSyDP-d7xKq8KoBP1XZudL0yD1r5hs6nYqXk","authDomain":"simple-crm-27075.firebaseapp.com","messagingSenderId":"1026678219764"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
