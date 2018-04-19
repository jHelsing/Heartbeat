import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
 export class LoginPage {

  public static roleCollectionNames = ['nurses', 'doctors'];

  // Used to read the input fields from HTML elements with [(ngModel)].
  private inputEmail: string;
  private inputPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {

    // Check if the current device is already logged in as a user. If so, continue that session.
    this.loginProvider.checkLoggedIn(this.loadCorrectPage);
  }

  public loadCorrectPage(userID) {
    const db = firebase.firestore();
    for (const roleCollectionName of LoginPage.roleCollectionNames) {

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
    this.loginProvider.login(this.inputEmail, this.inputPassword).then((promise) => {
      this.loadCorrectPage(promise.uid);
    });
  }

  // Log user out.
  public logout() {
    this.loginProvider.logout();
  }

}
