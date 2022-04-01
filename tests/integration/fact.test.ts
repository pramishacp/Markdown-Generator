import request from 'supertest';

let server;

describe('Fact', () => {
    beforeEach(() => {
        server = require('../../src/server');
    });

    afterEach(async () => {
        await server.close();
    });

    describe('POST /', () => {
        let body;

        const exec = async () => await request(server)
            .post('/api/markdown')
            .send(body);

        beforeEach(async () => {
            body = {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.",
                "format": {
                    "bold": [
                        "Aliquam", "Mauris"
                    ],
                    "replace": {
                        "cursus": "CURSUS",
                        "lacinia": "malesuada nunc"
                    },
                    "fact": [
                        "tortor", "fames"
                    ],
                    "width": 80
                }
            }
        });

        afterEach(async () => {
            jest.clearAllMocks()
        });

        it('should return 400 if no text is provided', async () => {
            body.text = '';

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 400 if no text is provided', async () => {
            delete body.format;

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 400 if format.fact is not not an array', async () => {
            body.format["fact"] = '';

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 400 if format.fact array is empty', async () => {
            body.format['fact'] = [];

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 400 if format.fact array item(s) are not string', async () => {
            body.format['fact'] = [1];

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 200 with chuck random fact text if word is the last word of text with dot(.)', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['width'];

            body.format['fact'] = ['fermentum'];

            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.text).toBeTruthy();
            expect(res.text.lastIndexOf("Chuck Norris")).toBeGreaterThan(body.text.lastIndexOf("fermentum"));
        });

        it('should return 200 with chuck random fact text if word is the last word of text with no dot(.)', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['width'];

            body.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum"
            body.format['fact'] = ['fermentum'];

            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.text).toBeTruthy();
            expect(res.text.lastIndexOf("Chuck Norris")).toBeGreaterThan(body.text.lastIndexOf("fermentum"));
        });

        it('should return 200 with original text if word is not found in the text', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['width'];

            body.format['fact'] = ['fermentums'];

            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.text).toBe(body.text);
        });

        it('should return 200 with chuck random fact text if format contains only fact', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['width'];

            const res = await exec();
            expect(res.status).toBe(200);
            expect(res.text.lastIndexOf("Chuck Norris")).toBeGreaterThan(body.text.lastIndexOf("tortor"));
        });

        it('should return 200 if it is valid', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['width'];

            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.text.lastIndexOf("Chuck Norris")).toBeGreaterThan(body.text.lastIndexOf("tortor"));
        });
    });
});