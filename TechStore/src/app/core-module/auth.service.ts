import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
  if (username.trim() !== '' && password.trim() !== '') {
      // Assuming successful authentication, set isAuthenticated to true
      this.isAuthenticated = true;
      // Store authentication status in localStorage for session persistence
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    // Authentication failed if username or password is empty
    return false;
  }

  logout(): void {
    // Reset authentication status and remove from localStorage on logout
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  getIsAuthenticated(): boolean {
    // Return current authentication status
    return this.isAuthenticated;
  }
}
