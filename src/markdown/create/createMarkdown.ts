require('express-async-errors');

import ParserService from '../../lib/parserService';

const createMarkdown = async (req, res) => {
        const markdown: string = await ParserService.generateMarkdown(req.body);
        res.status(200).send(markdown);
}

export default createMarkdown;