# Javascript Project : Calculator

Creating a calculator using HTML, SCSS, and Javascript based on a photo from the
internet. This calculator has number keys from 0 to 9, has keys such as +, -,
\*, /, =, and able to handle decimals.

[Live Project](https://arrums.github.io/JS-project-calculator/)

## Screenshots

![calculator](https://user-images.githubusercontent.com/100544967/169457189-e964ab94-1c85-4bcb-a0a6-543d1a9687dd.PNG)

## Goals

Implementing the Javascript topics that I have learned through out the training
such as Loops, Iterators, Document Object Model (DOM), and Modules.

## Inspiration

![inspiration](https://user-images.githubusercontent.com/100544967/159889087-1aef0fea-a390-4daf-b887-d6a832e3d68a.jpeg)

_Calculator UI design from_
[Muzli](https://search.muz.li/MTBmNDlhODc5?utm_source=muz.li-insp&utm_medium=article&utm_campaign=%2Finspiration%2Fcalculator-design%2F)

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
2. Style the calculator using SCSS (flexbox and grid)
3. Grabbing the element from HTML using DOM
4. Create addEventListener to each of the buttons group to make it render on the
   output display
5. Number keys - whenever a new number has been pressed, it should render on the
   output display. When the next number has been pressed, it will concatenante
   with the first number and so forth
6. Operator keys - if the operator keys are pressed after number keys, it will
   be shown on the output display.
7. Operator key (%) - turn the number to percentage by dividing it with 100
8. Operator key (.) / Decimal key - if the decimal key is the first key to be
   press, it will display "0.". if it's press after a number, it will append the
   number to be decimal
9. AC key - it will clear all the displayed output and reset it to default
   value.
10. +/- key - it will change the displayed number to negative if the displayed
    number is positive and so forth

### Design choice

**Using HTMLelement.innerText**

Initially I chose innerText so I wouldn't have to key in value attributes in the
HTML of the number and operator buttons and because it doesn't grab the
whitespace around from the HTML element. However while working on the operator
buttons, I had to put value on the operator buttons as I was using special
character (HTML Symbols / Entities).

**Calculating The Values**

Since I'm not allowed to use eval() to calculate the values, I had to create a
function that takes in the value and the operator and use switch statement to
evaluate it. Initially, I had difficulties on how to store the first values,
operator, and second value. After a discussion with the \_nology coach, she
helped direct me to the right path. Storing the second value was more trickier
than storing the first value as I have to use RegEx to find the index when the
second value starts.

## Future implementations

In the future, I plan to extend this project by adding some feature such as:

- [ ] Operator to have different color than numbers on the display
- [ ] Light mode theme
- [ ] Supports order of operations
