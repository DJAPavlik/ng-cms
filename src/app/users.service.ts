import { Injectable } from '@angular/core';
//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//2. Import Observable 
import { Observable } from 'rxjs';

//3. Import the User object
import { User } from './user';

//3. Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn:'root'
})

export class UsersService {

  //4. Set up the URL
  private url: string = 'http://localhost:3001/api/users';

  //5. Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }

  //6. Set up a simple observable.
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

}