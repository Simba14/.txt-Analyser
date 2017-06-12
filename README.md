# .txt Analyser

A web application that allows a user to upload a .txt file and analyse the words that it contains.
The analysis consists of a report detailing:
- The complete set of unique words.
- The number of times each word appears.
- Whether or not that number is a prime number.

[Analyse your .txt files now!](https://txt-analyser.herokuapp.com/)

### Installation

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

### Technologies

The app was developed using TDD, written in JavaScript and built with:

- NodeJS
- Express

The Jasmine framework was used for testing.
