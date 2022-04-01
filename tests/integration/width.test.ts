import request from 'supertest';

let server;

const widthText = {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu\n purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula va\nrius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam di\nctum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arc\nu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit\n.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur e\nfficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auct\nor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempu\ns. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibul\num ornare quam nec ornare fermentum."
}

describe('Width', () => {
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

        it('should return 400 if format.width is not a number', async () => {
            body.format['width'] = ''

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 400 if format.width is less than 1', async () => {
            body.format['width'] = 0

            const res = await exec();

            expect(res.status).toBe(400);
        });

        it('should return 200 if format contains only width', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['fact'];

            const res = await exec();

            expect(res.status).toBe(200);
        });

        it('should return 200 if valid', async () => {
            delete body.format['bold'];
            delete body.format['replace'];
            delete body.format['fact'];

            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.text).toBe(widthText.text);
        });
    });
});