# Javascript Project : Calculator

Creating a calculator using HTML, SCSS, and Javascript based on a photo from the
internet. This calculator has number keys from 0 to 9, has keys such as +, -,
\*, /, =, and able to handle decimals.

[Link to live project - to be added](#)

## Goals

Implementing the Javascript topics that I have learned through out the training
such as Loops, Iterators, Document Object Model (DOM), and Modules.

## Inspiration

![inspiration](https://user-images.githubusercontent.com/100544967/159889087-1aef0fea-a390-4daf-b887-d6a832e3d68a.jpeg)

## Requirements

### MVP

HTML/SCSS

- Create a calculator to be rendered to the html page
- it should have number keys from 0 to 9
- It should have operator keys (+, -, /, \*, =)
- It should have a display rendering the current calculation in a box at the top
- It should also have a "." key
- You should choose a picture of a calculator from the Internet and reproduce it
  in HTML/SCSS

JavaScript

- Should render the current calculation in a box at the top (calculator display)
- It should handle decimals
- It doesn't need to support orders of operation
- It should not use eval() or Function() constructor

## Implementation Details

1. Create several buttons on the HTML page and create div to render the output.
   Ensuring that I name the button using ID.
2. Style the calculator using SCSS (flexbox or grid)
3. Grabbing the element from HTML using DOM
4. Create addEventListener to each of the buttons to make it render on the
   output display
5. Number keys - whenever a new number has been pressed, it should replace the
   default value. When the next number has been pressed, it will concatenante
   with the first number and so forth
6. Operator keys - if the operator keys are pressed after number keys, it will
   be shown on the output display. Otherwise nothing going to be shown on the
   display
7. Operator key (%) - turn the number to percentage by dividing it with 100
8. Operator key (.) / Decimal key - if the decimal key is the first key to be
   press, it will display "0.". if it's press after a number, it will append the
   number to be decimal
9. CE / AC key - it will clear all the displayed output and reset it to default
   value "0"
10. +/- key - it will change the displayed number to negative if the displayed
    number is positive and so forth
