import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore : AngularFirestore) { }
  getComment(project) {
    return this.firestore.collection(project).snapshotChanges()
  }
  createComment(content,project){
    return this.firestore.collection(project).add(content)
  }
  createContact(content){
    return this.firestore.collection('contact').add(content);
}
}
