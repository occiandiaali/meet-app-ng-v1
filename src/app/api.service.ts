import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=51a2bdde808e4355aeb084e6e0ead725');
  }
} // class
