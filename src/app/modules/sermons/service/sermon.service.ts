import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Sermon } from "../assets/interface/link-sermons";
import sermonJson from '../../../../assets/json/sermon.json';
import Fuse from "fuse.js";

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
        const list = sermonJson

        const sermonsOrderDesc = list.sort((a, b) => {
            if (a.id > b.id) { return -1; }
            if (a.id < b.id) { return 1; }
            return 0;
        })

        return sermonsOrderDesc

        // return this.http.get<Sermon[]>((this.url) + this.api + `/all`);
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
        const list = sermonJson
        let sermonList: any[] = []
        
        list.forEach((sermon) => {
            speakers.forEach((speaker) => {
                if (sermon.speaker == speaker) {
                    sermonList.push(sermon)
                }
            })
        })
        return sermonList

        // return this.http.post<Sermon[]>((this.url) + this.api + `/by-speakers`, speakers);
    }

    searchSpeakers(name:string) {
        const list = sermonJson.map((sermon) => sermon.speaker)
        let speakerList: string[] = []

        list.forEach((speaker) => {
            if (!speakerList.includes(speaker)) {
                speakerList.push(speaker)
            }
        })

        if (name == '') {
            return speakerList
        } else {
            const options = {
                shouldSort: true,
                threshold: 0.3,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [],
            }

            const fuseData = new Fuse(speakerList, options)
            return fuseData.search(name).map((speaker) => speaker.item)
        }

        // return this.http.get<Sermon[]>((this.url) + this.api + `/speakers`, {
        //     params: {
        //         name: name
        //     }
        // });
    }

    getMostRecent() {
        const list = this.getAll()
        return list[0]

        // return this.http.get<Sermon[]>((this.url) + this.api + `/most-recents`, {
        //     params: {
        //         limit: limit
        //     }
        // });
    }
}