import { Injectable } from '@angular/core';
import sermonJson from '../../../../assets/json/sermon.json';
import Fuse from "fuse.js";

@Injectable({
    providedIn: 'root'
})
export class SermonService {
    constructor() {}

    getAll() {
        const list = sermonJson

        const sermonsOrderDesc = list.sort((a, b) => {
            if (a.id > b.id) { return -1; }
            if (a.id < b.id) { return 1; }
            return 0;
        })

        return sermonsOrderDesc
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
    }

    getMostRecent() {
        const list = this.getAll()
        return list[0]
    }
}