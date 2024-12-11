import { Injectable } from '@angular/core';
import {getAuth,Auth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: string | null | undefined = undefined;

  constructor(private auth: Auth) { }


  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password)
  }
  
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password)
  }


  logout(){
    return signOut(this.auth);
  }

  // getUser(){
  //   const user=getAuth().currentUser
  //   this.user=user?.displayName

  //   return user;
  // }

 

}
