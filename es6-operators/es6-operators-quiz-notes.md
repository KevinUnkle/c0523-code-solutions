# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The logical AND operator for a set of boolean operands will be true if and only if all the operands are true, otherwise it will be false. The logical OR operator for a set of operands is true if and only if one or more of its operands is true - typically used with boolean values. Outside of "if statements" they evaluate to expression values instead of boolean values.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The second operand is not evaluated if the result can be deduced solely by evaluating the first operand.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It's a logical operator that returns its right hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It differs from || because it still processes the right hand side operand.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. The ternary operator emphasizes what's to be done over the selection of the values to do it with.
- What is the `?.` (optional chaining) operator? When would you use it?
  It accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. You'd use it when attempting to call a method which may not exist.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In object literals, te spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. The spread operator can be used to clone an iterable object or merge iterable objects into one.
- What data types can be spread into an array? Into an object?
  Only iterable objects can be spread into an array. Object literals can spread into an object.
- How does spread syntax differ from rest syntax?
  Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
