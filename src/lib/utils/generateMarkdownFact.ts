import {
    ChuckNorrisFact
} from '../types/chuckNorris'

const generateRandomFact = (text: string, words: string[], facts: ChuckNorrisFact[]): string => {
    words.forEach((word, index) => {
        const startIndexOfWord = text.lastIndexOf(word);
        if (startIndexOfWord > -1) {
            /* If: \n found then start index of \n,  else: start index of '.'+ 1 */
            let startIndexOfNewLine = text.indexOf("\n", startIndexOfWord) > -1 ? text.indexOf("\n", startIndexOfWord) -1 : text.indexOf(".", startIndexOfWord) + 1;
            /* If: no '\n' or '.' then set to text length*/
            if (startIndexOfNewLine === 0) {
                startIndexOfNewLine = text.length
            }
            /* newString = firstPart + fact + lastPart */
            text = text.substring(0, startIndexOfNewLine) + `\n${facts[index]}` + text.substring(startIndexOfNewLine + 1)
        }
    })
    return text;
}

export default generateRandomFact;