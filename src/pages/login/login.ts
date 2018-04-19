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
  private roleCollectionNames = ['nurses', 'doctors'];

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

    // Listen for auth state once when app starts to continue an ongoing session, then unsubscribe.
    const authObserver = afAuth.authState.subscribe((user) => {
      if (user) {
        this.loadCorrectPage(user.uid); // User already logged in, check role and load corresponding page.
        authObserver.unsubscribe();
      } else {
        // Nog logged in
        authObserver.unsubscribe();
      }
    });
  }

  public loadCorrectPage(userID) {
    const db = firebase.firestore();
    for (const roleCollectionName of this.roleCollectionNames) {

      // Look for userID in collection. If it exists in category, user has role.
      db.collection(roleCollectionName).doc(userID).get().then((doc) => {

        if (doc.exists) {
          alert('User is in role category = ' + roleCollectionName);
          // TODO: Load correct page.
        }

      });
    }
  }

  // Fetch username and password from input fields. Log user in.
  public login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword).then((promise) => {
      this.loadCorrectPage(promise.uid);
    });

  }

  // Log user out.
  public logout() {
    this.afAuth.auth.signOut();
  }

}
