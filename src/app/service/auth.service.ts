import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';


import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(private AFauth: AngularFireAuth, private afs: AngularFirestore) { 
  }



  async register(email:string, password: string): Promise<User> {

    try {

      const {user} = await this.AFauth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error', error)
      
    }
  }

  async login(email: string, password : string): Promise<User> {
    try {
      const {user}= await this.AFauth.signInWithEmailAndPassword(email,password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error',error);
      
    }


  }

  async sendVerificationEmail(): Promise<void> {

    try {

      return (await this.AFauth.currentUser).sendEmailVerification();
      
    } catch (error) {
      console.log('Error', error);
      
    }
  }

   isEmailVerified(user: User): boolean{
    return user.emailVerified === true ? true: false;

  }

  async logout(): Promise<void> {
    try {
      await this.AFauth.signOut();
    } catch (error) {
      console.log('Error',error);
    }


  }

  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    const data:User = {
      uid:user.uid,
      email:user.email,
      emailVerified:user.emailVerified,
      displayName: user.displayName
    };

    return userRef.set(data, {merge: true});
  }
}
