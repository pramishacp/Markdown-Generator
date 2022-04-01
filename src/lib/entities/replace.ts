import generateMarkdownReplace from '../utils/generateMarkdownReplace';

import Text from './text';

import {
    Replace
} from '../interfaces/format';

import MarkdownInterface from '../interfaces/markdown';

class TextReplace extends Text implements MarkdownInterface {
    private words: Replace;
    private markdown: string;

    constructor(
        text: string,
        words: Replace
    ) {
        super(text);

        this.updateWords(words);
        this.markdown = generateMarkdownReplace(text, words)
    }

    getMarkdown(): string {
        return this.markdown;
    }

    protected getWords(): Replace {
        return this.words;
    }

    protected updateWords(words: Replace): void {
        this.words = words;
    }
}

export default TextReplace;