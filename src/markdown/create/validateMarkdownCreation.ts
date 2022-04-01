/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import { Format } from '../../lib/interfaces/format'

interface RequestBody {
    text: string,
    format: Format,
}

const validateMarkdownCreation = (body: RequestBody): Joi.ValidationResult < any > => {
        const schema = Joi.object({
            text: Joi.string().required(),
            format: Joi.object({
                bold: Joi.array().items(Joi.string().required()),
                width: Joi.number().min(1),
                replace: Joi.object().min(1).pattern(Joi.string(), Joi.string()),
                fact: Joi.array().items(Joi.string().required()),
            }).required()
        });

        return schema.validate(body);
}

export default validateMarkdownCreation;