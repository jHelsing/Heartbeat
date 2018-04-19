import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginProvider {

  constructor(private afAuth: AngularFireAuth) {

  }

  // Check if there is a logged in user at this time. If there is, the parameter function is called.
  public checkLoggedIn(onLoggedIn: (uid: string) => any) {
    const authObserver = this.afAuth.authState.subscribe((user) => {
      if (user) {
        onLoggedIn(user.uid);
        authObserver.unsubscribe();
      } else {
        // Nog logged in
        authObserver.unsubscribe();
      }
    });
  }

  public login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
