import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private inputEmail;
  private inputPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log('Logged in');
        console.log(firebaseUser.getIdToken());
      } else {
        console.log('Not logged in');
      }
    });
  }

  public login() {
    console.log('Logging in');
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword);
    promise.catch((e) => console.log(e.message));
  }

  public logout() {
    console.log('Logging out');
    const auth = firebase.auth();
    auth.signOut();
  }

}
