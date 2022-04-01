import TextFact from '../../src/lib/entities/fact';

let server;

describe('TextFact Class', () => {
        let text;
        let words;
        let facts;
        let fact;
   
        beforeEach(() => {
                server = require('../../src/server');

                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.";
                words = [ "tortor", "fames" ];
                facts = ['Chuck Norris can cook.', 'When Chuck Norris pokes you on Facebook'];

                fact = new TextFact(text, words, facts);
        });

        afterEach(async () => {
                await server.close();
        });

        it('should get markdown if it is valid', () => {
                const res =  fact.getMarkdown();

                expect(res).toBeTruthy();
        });

        it('should get words if it is valid', () => {
                const res =  fact.getWords();

                expect(res).toEqual(expect.arrayContaining(words))
        });

        it('should update words if it is valid', () => {
                const res =  fact.updateWords(words);

                expect(res).toBeUndefined();
        });

        it('should get facts if it is valid', () => {
                const res =  fact.getFacts();

                expect(res).toEqual(expect.arrayContaining(facts))
        });

        it('should update syntax if it is valid', () => {
                const res =  fact.updateFacts(facts);

                expect(res).toBeUndefined();
        });
});