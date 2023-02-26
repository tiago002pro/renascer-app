export interface LinkSermons {
    banner: Array<Banner>
}

export interface Banner {
    id: number,
    code: string, 
    title: string, 
    speaker: string
}