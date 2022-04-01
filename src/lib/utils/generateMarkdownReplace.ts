import {
        Replace
    } from '../interfaces/format';
    
    const generateMarkdownReplace = (text: string, elements: Replace): string => {
        return text.replace(new RegExp(`(${Object.keys(elements).join('|')})`, 'gim'), (match) => elements[match] || match)
    }
    
    export default generateMarkdownReplace;