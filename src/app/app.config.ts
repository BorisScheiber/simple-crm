import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environments';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideFirebaseApp(() =>
      initializeApp(environment.firebase) // Verwende die Firebase-Konfiguration aus `environment.ts`
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
