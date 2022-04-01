<h1 align="center"> Markdown Service </h1> <br>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Testing](#testing)
- [API](#requirements)
- [CI/CD Pipeline](#cicd-pipeline)

## Introduction
### The epic

Design a service that given a string with line breaks ("\n") and formatting parameters, returns a string formatted with basic markdown syntax.

Example input:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.
```

The service should be able to:

- Limit text to a specified line width.
- Given a list of words, turn them bold using markdown syntax. (ie. all **Aliquam** words in text should be made bold)
- Given a list of words and their substitutions, replace all occurrences of the specified words with their substitutions. (ie. replace every Duis with DUIS and so on)
- Given a list of words, add a random Chuck Norris fact after the paragraph where such words are found. (possible source https://api.chucknorris.io/)

### A test case

Given the parameters:

```
- Line width: 80
- Bold strings: "Aliquam", "Mauris"
- Replace strings: ("cursus", "CURSUS"), ("lacinia", "malesuada nunc")
- Chuck Norris food fact strings: "tortor", "fames"
```

And the input text:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.
```

One possible output could be:

```
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu\npurus malesuada sodales. Nunc a risus nunc.                                     \nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula   \nvarius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor.         \n**Aliquam** dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et \nvestibulum arcu est eget turpis. Etiam tortor erat, malesuada nunc et faucibus  \nvitae, maximus et elit.                                                         \nThere is space, there is time, and there is Chuck Norris. Just kidding, Chuck   \ncame first.                                                                     \nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur  \nefficitur sem sed ligula eleifend varius. **Mauris** et risus quis libero mattis\nauctor id ut orci.                                                              \n**Aliquam** CURSUS sapien et euismod vestibulum. In maximus dolor eu vulputate  \ntempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum.    \nVestibulum ornare quam nec ornare fermentum.
```

Or what's the same but replacing the "\n" with actual line breaks for better readability in this Readme:

```
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu
 purus malesuada sodales. Nunc a risus nunc.                                     
 Praesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula   
 varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor.         
 **Aliquam** dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et 
 vestibulum arcu est eget turpis. Etiam tortor erat, malesuada nunc et faucibus  
 vitae, maximus et elit.                                                         
 There is space, there is time, and there is Chuck Norris. Just kidding, Chuck   
 came first.                                                                     
 Donec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur  
 efficitur sem sed ligula eleifend varius. **Mauris** et risus quis libero mattis
 auctor id ut orci.                                                              
 **Aliquam** CURSUS sapien et euismod vestibulum. In maximus dolor eu vulputate  
 tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum.    
 Vestibulum ornare quam nec ornare fermentum.                                    
```

## Features

- API is dockerized. Includes `Dockerfile` and `docker-compose` and README.md with information about how to run it locally
- Provided solution consists of OOP paradigm for Generating & Managing Markdown and FP paradigm for handling Routes, Services, Data Access Layers
- Architecture
    - **Encapsulated**
       - [x] organizied related data and functions into one class. 
       - [x] The data is saved in properties while the functions that operate on that data are saved in methods. 
       - [x] Access modifiers determine whether a property or method is public, private, or protected.
       - [x] Acheived: 
          - [x] We will be telling the class object to display text as opposed to asking the class object for data and printing it ourselves. Hence, the flexibility to refactor the class as we see fit: we can add, remove, or rename private properties and methods without breaking external code.
          - [x] logic for reading and manipulating the data is owned by and centralized in the class itself, which will help with maintainability in the long run.
    - Classes TextBold, TextReplcae, TextWidth, TextFact **inherit** methods and properties from a base class text.
      - [x] Chosen this approach because: There is a clear hiearchical relationship between the parent Text class and child classes TextBold, TextReplcae, TextWidth, TextFact.
      - [x] Follows: Concerned with what an object is. “is a” relationships (a TextBold is a Text)
      - [x] Acheived: Reused shared logic and data.
      - [x] Trade-offs: 
          - [ ] As our app grows over time, we may hit an issue: the tight coupling between a Text class and its children classes makes the Text class resistant to change.
          - [ ] The Text class is fragile because changing its code could result in unexpected behavior in the child classes (ie, Text class has no idea how its children are using the base code, so it is hard to make assumptions about downstream impacts of code changes).
      
    - Classes Markdown uses **composition** to get functionality from both TextBold, TextReplcae, TextWidth, TextFact.
      - [x] Chosen this approach because: This markdown new class needs functionality from TextBold, TextReplcae, TextWidth, TextFact classes to print bold text, replace text, width text, fact text, which is not possible with inheritance as classes can extend at most one other class
      - [x] Follows: Concerned with what an object can do. “has a” relationships (a Markdown has a TextBold)
      - [x] Acheived: More flexibility. Made the functionality of our app plug-and-play, so we can account for more complex use cases.
      - [x] Trade-offs: 
          - [ ] our Markdown class code is slightly more complex and significantly more lines of code.
 
     - Classes TextBold, TextFact, TextReplace, TextWidth uses **Abstraction** using using **interfaces**.
          - [x] Chosen this approach because:  I used abstraction to design the classes in a way that revealed as little as possible about their inner workings. To achieve this, I used interfaces to enforce public methods. For example, the MarkdownInterface ensures that our TextBold, TextReplcae, TextWidth, TextFact classes expose a getMarkdown() method that generates a markdown. Without this interface, we would have been tempted to define those classes that expose private properties with the intention of having other classes read those properties to generate markdown. This would be problematic as the logic for generating the markdown for a class would be spread across multiple classes, violating encapsulation.

- folder struture 
  
  ```
  src
    lib - 
       [x] entities folder hold our classes. 
       [x] enums folder will hold our enums.
       [x] types folder will hold global types. 
       [x] utils folder will hold global utility function
       [x] interfaces folder will hold global interfaces. 
       [x] chuck folder will gold chuck data access layer and chuck service layer
       [x] parser service is kind of an engine which generate the markdown. It is the entry point to markdown generation from routes
    routes
       [x] markdown module
           [x] create - sub module. holds anything that related to creation  
               [] createMarkdown.ts - markdown creation function
               [] index.ts - hold anything that we want to export from creation
               [] validateMarkdownCreation.ts - hold markdown creation validation function
           [x] index.ts -  will hold functions from different sub modules 
           [x] routes.ts - will hold markdown routes
    middleware
       [x] error - error handling middleware 
       [x] validate - validation middleware
    startup
       [x] config - config startup
       [x] env - config startup
       [x] logging - logging startup
       [x] prod - prod startup
       [x] route - route startup
    server.ts - entry point of app
  ```
- 
- ESLint is configured
- Integration tests and unit tests are included.
- Provided Swagger  Documentation of the API.
## Requirements
You need to have `docker` and `docker-compose` installed on your computer to run the service

## Quick Start

1. Clone this repository
2. In the root dir
   - Create a **`.env`** file. Enviornmental variables for the service is placed in this file
   - Copy **`.env.sample`** content and paste it in the **`.env`**
   
   
   
| ENV VARIABLE          | DEFAULT                    | Can I override the default value? | Schema                                      |
|-----------------------|----------------------------|-----------------------------------|---------------------------------------------|
| NODE_ENV              | dev                        | OPTIONAL                          | type: string  enum: ["dev", "test", "prod"] |
| CHUCK_NORRIS_API      | https://api.chucknorris.io | **DO NOT CHANGE**                 | type: string                                |
| NODE_DOCKER_PORT      | 5001                       | OPTIONAL                          | type: number                                |


3. Run from root dir

### Run Local

```
# Build
docker-compose up -d

# Check state of of all the containers
docker-compose ps
```

 *We assume that the service is running of the default port `5001`*

- Enter http://localhost:5001/api-docs in a browser to see the application running. 

```
# (Optional) If state is not `Up`, inspect the logs to find out what errors are occurring 
docker-compose logs --follow

# (Optional) Fix the issue, rebuild and restart the containers
docker-compose up -d --build

# In the end, stop and remove containers, networks, images, and volumes
docker-compose down
```

## Testing

```
# run integration test
docker-compose run markdown npm run test

# run integration test in watchAll mode. This will watch files for changes and rerun all tests when something changes. Useful for TDD
docker-compose run markdown npm run test-watch
```

## API

*We assume that the service is running of the default port `5001`*
- Enter http://localhost:5001/api-docs in a browser to see the Markdown Service Swagger API.

#### Example request `POST /api/markdown`

To generate a string formatted with basic markdown syntax call the service using for example `curl`. We assume
that the service is running of the default port `5001`.

Request

```
curl -X 'POST' \
  'http://localhost:5001/api/markdown' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
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
}'
```

Response

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu
 purus malesuada sodales. Nunc a risus nunc.
Praesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula va
rius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. **Aliquam*
* dictum, magna quis venenatis pharetra, leo sapien mollis **mauris**, et vestib
ulum arcu est eget turpis. Etiam tortor erat, malesuada nunc et faucibus vitae, 
maximus et elit
Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter c
omes straight out.
Donec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur e
fficitur sem sed ligula eleifend varius. **Mauris** et risus quis libero mattis 
auctor id ut orci.
**Aliquam** CURSUS sapien et euismod vestibulum. In maximus dolor eu vulputate t
empus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vest
ibulum ornare quam nec ornare fermentum.
```

## CI/CD Pipeline

Concern: I can configure CI/CD for the service with GitHub Actions. But since this is a private repository created by the organization I don't have the settings tab for the project to congigure github environment variables as secrets in GitHub for the project. The docker-compose.yml is using enviornment variables. Hence, Only after I have an option to configure secrets in GitHub, I can create a GitHub Action and implement a working CI/CD pipeline that runs the tests using GitHub Actions and includes a sample PR to show the working CI/CD pipeline.
