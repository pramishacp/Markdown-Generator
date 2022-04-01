import {
        Format
} from '../interfaces/format';

import {
        ChuckNorrisFact
} from './chuckNorris'

type MarkdownParameters = [
        text: string,
        format: Format,
        facts?: ChuckNorrisFact[]
]

export default MarkdownParameters