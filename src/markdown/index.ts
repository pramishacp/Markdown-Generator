import { createMarkdown, validateMarkdownCreation } from "./create/index";

const routes = {
    create: createMarkdown
}

const validate = {
    create: validateMarkdownCreation
}

export default {
    routes,
    validate
}

