import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
 export class LoginPage {

  // Used to read the input fields from HTML elements with [(ngModel)].
  private inputEmail: string = '';
  private inputPassword: string = '';
  private roleCollectionNames = ['nurses', 'doctors'];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider, public fireStore: AngularFirestore,
              public toastController: ToastController) {

    // Check if the current device is already logged in as a user. If so, continue that session.
    this.loginProvider.checkLoggedIn(this.loadCorrectPage);
  }

  public loadCorrectPage = (userID) => {
    for (const roleCollectionName of this.roleCollectionNames) {

      // Look for userID in collection. If it exists in category, user has role.
      const userPromise = this.fireStore.collection<any>('/' + roleCollectionName).doc(userID).ref.get();

      userPromise.then((user) => {
        if (user.exists) {
          alert('User is in role category = ' + roleCollectionName);
          // TODO: Load correct page.
        }
      });
    }
  }

  // Fetch username and password from input fields. Log user in.
  public login() {
    this.loginProvider.login(this.inputEmail, this.inputPassword)
    .catch((e) => {
      const toast = this.toastController.create({
        message: e.message,
        duration: 3000,
        position: 'bot',
      });
      toast.present();
    })
    .then((promise) => {
      if (promise) {
        this.loadCorrectPage(promise.uid);
      }
    });
  }

  // Log user out.
  public logout() {
    this.loginProvider.logout();
  }

}
