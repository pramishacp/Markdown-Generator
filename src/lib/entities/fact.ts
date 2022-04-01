import generateRandomFact from '../utils/generateMarkdownFact'

import {
    ChuckNorrisFact
} from '../types/chuckNorris'

import Text from './text';

import MarkdownInterface from '../interfaces/markdown';

class TextFact extends Text implements MarkdownInterface {
    private words: string[];
    private markdown: string;
    private facts: ChuckNorrisFact[]

    constructor(
        text: string,
        words: string[],
        facts: ChuckNorrisFact[]
    ) {
        super(text);

        this.updateWords(words);
        this.updateFacts(facts);
        this.markdown = generateRandomFact(text, words, facts);
    }

    getMarkdown(): string {
        return this.markdown;
    }

    protected getWords(): string[] {
        return this.words;
    }

    protected updateWords(words: string[]): void {
        this.words = words;
    }

    protected getFacts(): ChuckNorrisFact[] {
        return this.facts;
    }

    protected updateFacts(facts: ChuckNorrisFact[]): void {
        this.facts = facts;
    }
}

export default TextFact;