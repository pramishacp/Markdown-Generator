import Markdown from '../../src/lib/entities/markdown';

let server;

describe('Markdown Class', () => {
        let text;
        let format;
        let facts;
        let markdown;
        beforeEach(() => {
                server = require('../../src/server');

                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.";
                format = {
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
                };
                facts = ["There is no such thing as global warming. Chuck Norris just has a fever.", "It's Chuck Norris' world; we are just living in it."];
                
                markdown = new Markdown(text, format, facts);
        });

        afterEach(async () => {
                await server.close();
        });

        it('should get bold if it is valid', () => {
                const res =  markdown.getBold();

                expect(res).toBeTruthy();
        });

        it('should get replace if it is valid', () => {
                const res =  markdown.getReplace();

                expect(res).toBeTruthy();
        });

        it('should get width if it is valid', () => {
                const res =  markdown.getWidth();

                expect(res).toBeTruthy();
        });

        it('should get fact if it is valid', () => {
                const res =  markdown.getFact();

                expect(res).toBeTruthy();
        });
});