import TextReplace from '../../src/lib/entities/replace';

let server;

describe('TextReplace Class', () => {
        let text;
        let words;
        let replace;
        beforeEach(() => {
                server = require('../../src/server');

                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.";
                words = {
                        "cursus": "CURSUS",
                        "lacinia": "malesuada nunc"
                };
                replace = new TextReplace(text, words);
        });

        afterEach(async () => {
                await server.close();
        });

        it('should get markdown if it is valid', () => {
                const res =  replace.getMarkdown();

                expect(res).toBeTruthy();
        });

        it('should get words if it is valid', () => {
               const res =  replace.getWords();

               expect(res).toMatchObject(words)
        });

        it('should update words if it is valid', () => {
                const res =  replace.updateWords(words);

                expect(res).toBeUndefined();
        });
});