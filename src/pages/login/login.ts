import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AngularFirestore } from 'angularfire2/firestore';
import { PatientPage } from '../patient/patient';
import { AdminTabs } from '../admin-tabs/admin-tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
 export class LoginPage {

  // Used to read the input fields from HTML elements with [(ngModel)].
  private inputEmail: string = '';
  private inputPassword: string = '';

  private showSplash = false; // Show splash until it is confirmed wether there is a logged in user or not.
  private roleCollectionNames = ['nurses', 'doctors'];
  private roleCollectionPageMap = {
    nurses: PatientPage,
    doctors: PatientPage,
    administrators: AdminTabs,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider, public fireStore: AngularFirestore,
              public toastController: ToastController) {

    // Check if the current device is already logged in as a user. If so, continue that session.
    this.loginProvider.checkLoggedIn(this.loadCorrectPage, this.hideSplash);
  }

  public loadCorrectPage = (userID) => {
    for (const roleCollectionName of this.roleCollectionNames) {

      // Look for userID in collection. If it exists in category, user has role.
      const userPromise = this.fireStore.collection<any>('/' + roleCollectionName).doc(userID).ref.get();

      userPromise.then((user) => {
        if (user.exists) {
          // Replace login page as home page of the logged in user with the correct page for the specific user.
          this.navCtrl.setRoot(this.roleCollectionPageMap[roleCollectionName]);
        }
      });
    }
  }

  public hideSplash = () => {
    this.showSplash = false; // Read from html to show correct content.
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
