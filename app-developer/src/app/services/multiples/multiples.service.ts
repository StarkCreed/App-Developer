import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MultiplesService {
  constructor(private firestore: AngularFirestore) {}

  // Agregar documento
  addDocument(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }
}
