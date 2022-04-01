const generateMarkdownBold = (text: string, elements: string[], syntax: string): string => {
        return text.replace(new RegExp(`(${elements.join('|')})`, 'gim'), `${syntax}$1${syntax}`);
    }
    
    export default generateMarkdownBold;