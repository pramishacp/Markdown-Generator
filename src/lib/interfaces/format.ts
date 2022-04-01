export interface Format {
        width?: number
        bold?: string[]
        replace?: Replace,
        fact?: string[]
}

export interface Replace {
        [property: string]: string
}