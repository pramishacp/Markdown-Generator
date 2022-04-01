const generateMarkdownWidth = (text: string, width: number): string => {
        return text.replace(new RegExp(`(.{${width}})`, 'g'), "$1\n")
}

export default generateMarkdownWidth;