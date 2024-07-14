import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovieData():Observable<any>{
return this.http.get("https://www.omdbapi.com/?i=tt3896198&apikey=6cb4a96e")
  }
}
