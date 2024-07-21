import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private api:string;
  
  constructor(
    private http:HttpClient,
  ) {
    // this.api = 'http://10.0.0.101:8080';
    this.api = 'http://195.200.0.62:8080';
  }

  getById(id:number) {
    return this.http.get((this.api) + `/api/video/${id}`)
  }

  searchVideos(search:string) {
    return this.http.get((this.api) + `/auth/search-videos?search=${search}`)
  }

  getLatest() {
    return this.http.get((this.api) + `/auth/latest-videos`)
  }
}
