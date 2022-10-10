import { IMovie } from './../Interfaces/Movie/IMovie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getAll(name: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(
      environment.base_url +
        '/search/movie?query=' +
        name +
        '&' +
        environment.api_key
    );
  }
}
