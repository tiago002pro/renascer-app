import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Sermon } from "../assets/interface/link-sermons";

@Injectable({
    providedIn: 'root'
})
export class SermonService {
    url: String = 'http://localhost:8080'

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<Sermon[]> {
        return this.http.get<Sermon[]>((this.url) + `/api/sermon/all`);
    }
}