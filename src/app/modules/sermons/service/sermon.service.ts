import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Sermon } from "../assets/interface/link-sermons";

@Injectable({
    providedIn: 'root'
})
export class SermonService {
    url:string = 'http://localhost:8080'
    api:string = `/api/sermon`;

    constructor(
        private http:HttpClient
    ) {}

    create(sermon: Sermon): Observable<Sermon> {
        return this.http.post<Sermon>((this.url) + this.api + `/create`, sermon);
    }

    update(sermon: Sermon): Observable<Sermon> {
        return this.http.put<Sermon>((this.url) + this.api + `/update/${sermon.id}`, sermon);
    }

    delete(id: Number) {
        return this.http.delete((this.url) + this.api + `/delete/${id}`);
    }

    getAll() {
        return this.http.get<Sermon[]>((this.url) + this.api + `/all`);
    }

    getById(id:number) {
        return this.http.get<Sermon>((this.url) + this.api + `/${id}`);
    }

    searchBySpeaker(name:string):Observable<Sermon[]> {
        return this.http.get<Sermon[]>((this.url) + this.api + `/by-speaker`, {
            params: {
                name: name
            }
        });
    }

    searchBySpeakers(speakers:string[]) {
        return this.http.post<Sermon[]>((this.url) + this.api + `/by-speakers`, speakers);
    }

    searchSpeakers(name:string):Observable<Sermon[]> {
        return this.http.get<Sermon[]>((this.url) + this.api + `/speakers`, {
            params: {
                name: name
            }
        });
    }
}