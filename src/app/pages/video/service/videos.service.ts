import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private url = environment.api
  private root = '/video'
  
  constructor(
    private http:HttpClient,
  ) { }

  getById(id:number) {
    return this.http.get((this.url + this.root) + `/${id}`)
  }

  searchVideos(search:string) {
    return this.http.get((this.url + this.root) + `/search-videos?search=${search}`)
  }

  getLatest() {
    return this.http.get((this.url + this.root) + `/latest-videos`)
  }
}
