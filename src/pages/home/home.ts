import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public usersCollection: AngularFirestoreCollection<User>;
  public users: Observable<User[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
    this.usersCollection = fireStore.collection<User>('/users');
    this.users = this.usersCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as User,
    })));

 

  }

  public addUserPrompt() {
    /*const prompt = this.alertCtrl.create({
      title: 'Add User',
      message: 'Add a new user.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'age',
          placeholder: 'Age',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Add',
          handler: ({ name, age }) => this.addUser({ name, age: +age }),
        },
      ],
    });
    prompt.present();*/
    this.navCtrl.push(LoginPage);
  }

  public updateUserPrompt(user: User) {
    const prompt = this.alertCtrl.create({
      title: 'Update User',
      message: 'Update user data.',
      inputs: [
        {
          name: 'name',
          placeholder: user.name,
        },
        {
          name: 'age',
          placeholder: String(user.age),
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Update',
          handler: ({ name, age }) => this.updateUser(user, {
            name: name || user.name,
            age: +age || user.age,
          }),
        },
      ],
    });
    prompt.present();
  }

  public addUser(user: User) {
    console.log('Add', user);
    this.usersCollection.add(user);
  }

  public updateUser(user: User, data) {
    console.log('Update', { user, data });
    this.usersCollection.doc(user.$id).update(data);
  }

  public removeUser(user: User) {
    console.log('Remove', user);
    this.usersCollection.doc(user.$id).delete();
  }


login(){


    this.navCtrl.push(LoginPage);

  }

}


