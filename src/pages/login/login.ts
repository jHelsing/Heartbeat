import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

/*
Headers for firestore start
*/


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
        //alert('Logged in');
       
        this.checkRoles(firebaseUser.uid);

        

      } else {
        //alert('Not logged in');
      }
    });
  }

  checkRoles(userID){

     //alert(userID);
     //alert("checkRules: userID = " + userID);

     var db = firebase.firestore();
     
     var nursesRef = db.collection('nurses').doc(userID).get().then(function(doc){
      
     if (doc.exists) {
        //console.log("Document data:", doc.data());
        
        //alert(doc.data()["name"]); //this is how to access the fields
        alert("The role is = Nurse");
      }

      });

     var doctorRef = db.collection('doctors').doc(userID).get().then(function(doc){
      
     if (doc.exists) {
        //console.log("Document data:", doc.data());
        
        //alert(doc.data()["name"]); this is how to access the fields
        alert("The role is = Doctor");
      }

     });


     //console.log(db);

  }

  public login() {
    //alert('Logging in');
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(this.inputEmail, this.inputPassword);
    promise.catch((e) => alert(e.message));

  }

  public logout() {
    alert('Logging out');
    const auth = firebase.auth();
    auth.signOut();
  }

 

}
