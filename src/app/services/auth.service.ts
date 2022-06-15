import { Injectable } from '@angular/core';
import { User } from '../users/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  role: string = "";

  constructor() { }

  storeUserInfo(user: User): void{
    sessionStorage.setItem("userInformation", JSON.stringify(user));
  }

  retreiveUserInfo(): User{
    let blankUserData: User = {
    empId: 0,
    empFirstName: "",
    empLastName: "",
    empUserName: "",
    empHashedPassword: "",
    rolesPojo:{
        roleId: 0,
        role: ""
    }
}

    let userData: any = sessionStorage.getItem("userInformation");
    if(userData!=null){
      return JSON.parse(userData);
    }
    return blankUserData;
  }

  removeUserInfo(): void{
    sessionStorage.removeItem("userInformation");
  }
}
