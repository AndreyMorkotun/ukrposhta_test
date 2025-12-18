import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { /*BehaviorSubject, */Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
