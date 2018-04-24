import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import Blob = firebase.firestore.Blob;

@Injectable()
export class Storage {

  public uploadImage(image: Blob, fileName: string) {
    const storageRef = firebase.storage().ref(fileName);
    console.log(storageRef.put(image).snapshot.downloadURL);
  }
  /*
   * The function is called as follows where the string in storage.getUrl is the name of the file. The return is a
   * promise that directly contains the url inside then. This url can then be assigned to a img tag as the source.
   * const storage = new Storage();
   * const result = storage.getUrl('Screen Shot 2018-04-19 at 10.47.01.png');
   * result.then((url) => {
   *   console.log(url);
   * });
   */
  public getUrl(imageName: string): Promise<any> {
    const storageRef = firebase.storage().ref(imageName);
    return storageRef.getDownloadURL();
  }

}
