import generateMarkdownWidth from '../utils/generateMarkdownWidth';

import Text from './text';

import MarkdownInterface from '../interfaces/markdown';

class TextWidth extends Text implements MarkdownInterface {
    private width: number;
    private markdown: string;

    constructor(
        text: string,
        width: number
    ) {
        super(text);

        this.updateWidth(width);
        this.markdown = generateMarkdownWidth(text, width)
    }

    getMarkdown(): string {
        return this.markdown;
    }

    protected getWidth(): number {
        return this.width;
    }

    protected updateWidth(width: number): void {
        this.width = width;
    }
}

export default TextWidth;