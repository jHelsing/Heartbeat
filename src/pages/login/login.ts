import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
 export class LoginPage {

  // Used to read the input fields from HTML elements with [(ngModel)].
  private inputEmail;
  private inputPassword;

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

    // Listen for auth state once when app starts to continue an ongoing session, then unsubscribe.
    const authObserver = afAuth.authState.subscribe((user) => {
      if (user) {
        this.checkRole(user.uid); // User already logged in, check role and load corresponding page.
        authObserver.unsubscribe();
      } else {
        // Nog logged in
        authObserver.unsubscribe();
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
    this.afAuth.auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword);

  }

  // Log user out.
  public logout() {
    this.afAuth.auth.signOut();
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
