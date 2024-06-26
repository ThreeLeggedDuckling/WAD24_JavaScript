# About This Project

## Objective

This is a beginner project in JS.

The aim of this project is to make a simple Mastermind game with a dynamic UI.


## Project Progress

Here is how I'm trying to proceed :

- [x] Create HTML bone structure
- [x] Create minimal CSS style
- [x] Create info tabs
    - [x] Create JSON file with tabs content
    - [x] Use data from JSON to create tabs[^1]
    - [x] Create functionality to show/hide tabs info on click
- [ ] Create game
    - [x] Create a try counter
    - [ ] Create game bone structure
    - [x] Create beads
    - [x] Create round functionality
    - [ ] Create game functionality

Further steps when inital version works :
- Add choice of page language
- Add responsivity
- Add choice of difficulty
    - variation of code size
    - variation of tries
    - variation on possible colors
- Add color theme choice (dark/light)
- Add temp scoreboard
- Add timer
- Calculate score based on score and time




[^1]: To import data from the .json I use `import data from 'data.json' with {type: 'json'};`, this method isn't supported by Mozilla's Firefox as of version 127.0 but should work fine in other browsers.

    (source : [Can I use](https://caniuse.com/mdn-javascript_statements_import_import_attributes_type_json))