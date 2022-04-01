import config from "./src/startup/config";

const swagger = {
    swagger: '2.0',
    info: {
        description: 'Markdown Parser Documentation',
        version: '1.0.6',
        title: 'Markdown',
    },
    host: `localhost:${config.app.port}`,
    basePath: '/api',
    tags: [
        {
            name: 'markdown',
            description: 'markdown',
        },
    ],
    schemes: ['http'],
    paths: {
        '/markdown': {
            post: {
                tags: ['markdown'],
                summary: 'Format a string to markdown syntax.',
                description: 'Given string with line breaks and formatting parameters, returns a string formatted with basic markdown syntax',
                operationId: 'generateMarkdown',
                consumes: ['application/json'],
                produces: ['application/json'],
                parameters: [
                    {
                        in: 'body',
                        name: 'body',
                        description: 'Text object with formatting information',
                        required: true,
                        schema: {
                            $ref: '#/definitions/ApiRequest',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'successful operation',
                        schema: {
                            $ref: '#/definitions/ApiResponse',
                        },
                    },
                    400: {
                        description: 'Invalid payload.',
                    },
                    500: {
                        description: 'Something failed.',
                    },
                },
            }
        },
    },
    definitions: {
        ApiResponse: {
            type: 'string',
        },
        ApiRequest: {
            type: 'object',
            required: [
                "text",
                "format"
            ],
            properties: {
                text: {
                    type: 'string',
                    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.'
                },
                format: {
                    type: 'object',
                    properties: {
                        bold: {
                            type: "array",
                            required: false,
                            items: {
                                type: "string",
                                example: "Aliquam"
                            }
                        },
                        replace: {
                            type: "object",
                            required: false,
                            properties: {
                                cursus: {
                                    type: "string",
                                    example: "CURSUS"
                                },
                                lacinia: {
                                    type: "string",
                                    example: "malesuada nunc"
                                }
                            }
                        },
                        fact: {
                            type: "array",
                            required: false,
                            items: {
                                type: "string",
                                example: "tortor"
                            }
                        },
                        width: {
                            type: "number",
                            required: false,
                            example: "80"
                        }
                    }
                },
            },
        },
        
    },
};

export default swagger