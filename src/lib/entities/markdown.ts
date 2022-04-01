import TextBold from "./bold";
import TextReplace from "./replace";
import TextWidth from "./width";
import TextFact from './fact';

import {
    Format
} from '../interfaces/format'
import {
    ChuckNorrisFact
} from '../types/chuckNorris'

class Markdown {
    private bold: TextBold;
    private replace: TextReplace;
    private width: TextWidth;
    private fact: TextFact;

    constructor(
        text: string,
        format: Format,
        facts ? : ChuckNorrisFact[]
    ) {

        if (format.bold) {
            this.bold = new TextBold(text, format.bold);
        }

        if (format.replace) {
            this.replace = new TextReplace(text, format.replace);
        }

        if (format.width) {
            this.width = new TextWidth(text, format.width);
        }

        if (format.fact) {
            this.fact = new TextFact(text, format.fact, facts);
        }
    }

    getBold() {
        return this.bold.getMarkdown();
    }

    getReplace() {
        return this.replace.getMarkdown();
    }

    getWidth() {
        return this.width.getMarkdown();
    }

    getFact() {
        return this.fact.getMarkdown();
    }
}

export default Markdown