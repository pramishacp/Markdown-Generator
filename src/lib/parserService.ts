import MarkdownParameters from './types/markdown';
import ChuckService from './chuck/chuckService';
import Markdown from './entities/markdown';

import Parser from './types/parser'
import { Format } from './interfaces/format';

const parserService: Parser = {
    /**
     * Given a string with line breaks ("\n") and formatting parameters, returns a string formatted with basic markdown syntax 
     */
    generateMarkdown: async (body) => {
        let formatedText: string = body.text;
        let format: Format = body.format;

        for (const [key] of Object.entries(format)) {
            let parameters: MarkdownParameters;

            if (key === 'fact') {
                const facts = await ChuckService.getRandomFoodFacts(body.format['fact']);
                parameters = [formatedText, { fact: body.format['fact'] }, facts];
            }

            if (key === 'bold') {
                parameters = [formatedText, { bold: body.format['bold'] }];
            }

            if (key === 'replace') {
                parameters = [formatedText, { replace: body.format['replace'] }];
            }

            if (key === 'width') {
                parameters = [formatedText, { width: body.format['width'] }];
            }

            const markdown = new Markdown(...parameters);
            formatedText = markdown[key].markdown;
        }

        return formatedText;
    },
};

export default parserService;