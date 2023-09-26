import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotApiService {
  private apiUrl = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  // Crie um método semelhante para obter produtos.
}
