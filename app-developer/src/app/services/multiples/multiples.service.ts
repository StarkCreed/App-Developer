import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MultiplesService {
  //Dependencia inyectada
  constructor(private firestore: AngularFirestore) {}

  //Método para agregar documento
  addDocument(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }
}
