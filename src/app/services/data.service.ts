import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PresentModel } from '../models/PresentModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:3000/badpresents"

  constructor(private http: HttpClient) {
    
  }

  getPresent(): Observable<PresentModel[]> {
    return this.http.get<PresentModel[]>(this.url)
  }

  addPresent(present: PresentModel): Observable<PresentModel>{
    return this.http.post<PresentModel>(this.url, present)
  }

  modifyPresent(present: PresentModel): Observable<PresentModel>{
    return this.http.put<PresentModel>(`${this.url}/${present.id}`, present)
  }

  deletePresent(present: PresentModel): Observable<PresentModel>{
    return this.http.delete<PresentModel>(`${this.url}/${present.id}`)
  }
}
