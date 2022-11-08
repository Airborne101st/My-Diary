import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http: HttpClient) { }

  base_url = "http://localhost:3000/"

  save(model:Model):Observable<any>{
    const headers  = { 'content-type': 'application/json'}
    const body = JSON.stringify(model)
    return this.http.post(this.base_url + "notes", body, {'headers':headers})
  }

  getnotes():Observable<Model[]>{
    return this.http.get<Model[]>(this.base_url + "notes")
  }


}
