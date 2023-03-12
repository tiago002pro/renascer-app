export interface LinkSermons {
    banner: Array<Sermon>
}

export interface Sermon {
    id: number,
    url: string,
    img: string,
    title: string, 
    speaker: string,
    description: string,
    date: Date,
}