import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http: HttpClient) { }

  base_url = "http://localhost:5000"

  save(data: any): Observable<any>{
    return this.http.post(this.base_url + "/create", data)
  }

  find(queryData:any): Observable<any>{
    return this.http.get(this.base_url + "/search", queryData)
  }


}
