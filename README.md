# .txt Analyser

A web application that allows a user to upload a .txt file and analyse the words that it contains.
The analysis consists of a report detailing:
- The complete set of unique words in alphabetical order.
- The number of times each word appears.
- Whether or not that number is a prime number.

[Analyse your .txt files now!](https://txt-analyser.herokuapp.com/)

![alt text](http://i.imgur.com/Vtoc6u4.jpg)

## User Stories

```
As a user,
So that I can analyse my .txt files,
I want to be able to upload them.

As a user,
So that I know I have incorrectly uploaded a file,
I want to see an error message.

As a user,
In order to analyse my .txt file,
I want see a detailed text report.

As a user,
To know which words are in my file,
I want to view all the unique words in a list.

As a user,
To easily locate a word of interest,
I want the list of words to be sorted alphabetically.

As a user,
To know how many times a word appears in my file,
I want to see the count next to the word.

As a prime number enthusiast,
So I know which word occurrences were prime numbers,
I want to see that fact detailed in the list.
```



## Installation

**1. Install node (if you haven't already)**
```
$ brew install node
```
**2. Clone and install npm**
```
$ git clone https://github.com/Simba14/txt-Analyser.git
$ cd txt-Analyser
$ npm install
```
**3. Set up the local host**
```
$ node index.js
```

**4. Run application in browser**
  - Navigate to `http://localhost:8000/` and start interacting with the app.

**To Run the Tests**

- Locate the file 'SpecRunner.html' in the root of the project directory.
- Open that file by copying its full path and pasting in the url field of a browser.
- The tests will automatically run once navigating to the page in the browser.

## Technologies

The app was developed using TDD, written in JavaScript and built with:

- NodeJS
- Express

The Jasmine framework was used for testing.
