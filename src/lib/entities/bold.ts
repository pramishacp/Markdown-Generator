import generateMarkdownBold from '../utils/generateMarkdownBold';

import Text from './text';

import Markdown from '../enums/markdown';

import MarkdownInterface from '../interfaces/markdown';

class TextBold extends Text implements MarkdownInterface {
    private words: string[];
    private markdown: string;
    private syntax: Markdown.Bold;

    static readonly Syntax = Markdown.Bold;

    constructor(
        text: string,
        words: string[],
        syntax: Markdown.Bold = Markdown.Bold
    ) {
        super(text);

        this.updateWords(words);
        this.updateSyntax(syntax);
        this.markdown = generateMarkdownBold(text, words, syntax)
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

    protected getSyntax(): Markdown.Bold {
        return this.syntax;
    }

    protected updateSyntax(syntax: Markdown.Bold): void {
        this.syntax = syntax;
    }
}

export default TextBold;