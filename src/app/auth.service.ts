import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  login(email: string, password: string): boolean {
    if (email === "admin@gmail.com" && password === "Abcd@1234") {
      this._isAuthenticated = true;
      return true;
    }
    alert("Wrong Credential")
    return false;
  }

  logout(): void {
    this._isAuthenticated = false;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
