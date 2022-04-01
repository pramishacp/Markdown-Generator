import TextWidth from '../../src/lib/entities/width';

let server;

describe('TextClass Class', () => {
        let text;
        let width;
        let newWidth;
        beforeEach(() => {
                server = require('../../src/server');

                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.";
                width = 80;
                newWidth = new TextWidth(text, width);
        });

        afterEach(async () => {
                await server.close();
        });

        it('should get markdown if it is valid', () => {
                const res =  newWidth.getMarkdown();

                expect(res).toBeTruthy();
        });

        it('should get width if it is valid', () => {
                const res =  newWidth.getWidth();

                expect(res).toBe(width);
        });

        it('should update width if it is valid', () => {
                const res =  newWidth.updateWidth(width);

                expect(res).toBeUndefined();
        });
});