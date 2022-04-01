import {
        Format
} from '../interfaces/format';

type Parser = {
        generateMarkdown: (body: Parse) => Promise<string>
}

type Parse = {
        text: string,
        format: Format
}

export default Parser