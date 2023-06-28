# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  let functio = (arg1, arg2) => {statements}
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It is now an expression instead of a statement.
- When using _concise body syntax_, how do you return an object literal?
  By adding parentheses around the entire body.
- In the expression
  `js
  foo(() => 42);
  - Identify the arrow function
    function () {
    return 42
    }
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    A function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  function bar (y) {
  console.log(`4y = ${4 * y}`);
  }
  - How many arguments does the arrow function take?
    One
    What value does it return?
    `4y = ${4 * y}`
  - How many arguments are passed to the function `bar`?
    one
  - What type of argument is passed to the function `bar`?
    a function
  - When does the arrow function's code get executed?
    In the console log statement.
- How does the value of `this` differ between standard functions and arrow functions?
  The value of this is determined by the surrounding scope (lexical environment) in an arrow function,

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
