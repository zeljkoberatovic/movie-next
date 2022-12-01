import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  apiUrl = `${environment.apiUrl}/upload`;

  constructor(private http: HttpClient) { }

  uploadFile(f: File){
    const formData = new FormData();
    formData.append('img', f);
    return this.http.post<any>(this.apiUrl, formData);
  }
}
