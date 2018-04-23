import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginProvider {

  constructor(private afAuth: AngularFireAuth) {

  }

  // Check if there is a logged in user at this time and call the proper callback function accordingly.
  public checkLoggedIn(onLoggedIn: (uid: string) => any, onNotLoggedIn: () => any) {
    const authObserver = this.afAuth.authState.subscribe((user) => {
      if (user) { // User is undefined if there is no logged in user.
        onLoggedIn(user.uid);
      } else {
        onNotLoggedIn();
      }
      authObserver.unsubscribe();
    });
  }

  public login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
