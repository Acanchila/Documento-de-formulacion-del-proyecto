import { FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from '@angular/fire/firestore';

export const anyConverter: FirestoreDataConverter<any> = {
  toFirestore(data: any): any {
    return data;
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): any {
    return { id: snapshot.id, ...snapshot.data(options) };
  }
};
