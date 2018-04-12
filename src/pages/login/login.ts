import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
 export class LoginPage {

  // Used to read the input fields from HTML elements with [(ngModel)].
  private inputEmail;
  private inputPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Add listener for detecting when user logs out or in.
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.checkRole(firebaseUser.uid); // When user logs in, check role and load corresponding page.
      } else {
        alert('User logged out!');
      }
    });
  }

  public checkRole(userID) {
    // Load page corresponding to user role.
    this.loadCorrectPage(userID, 'nurses');
    this.loadCorrectPage(userID, 'doctors');
  }

  // Fetch username and password from input fields. Log user in.
  public login() {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword);
    promise.catch((e) => alert(e.message));

  }

  // Log user out.
  public logout() {
    const auth = firebase.auth();
    auth.signOut();
  }

  private loadCorrectPage(userID, roleCollectionName) {
    const db = firebase.firestore();

    // Look for userID in collection. If it exists in category, user has role.
    db.collection(roleCollectionName).doc(userID).get().then((doc) => {

      if (doc.exists) {
        alert('User is in role category = ' + roleCollectionName);
        // TODO: Load correct page.
      }

    });
  }

}
