# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  A method used to target the most deeply nested element that caused an event, called a target element.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of the bubbling process that goes upward towards its parent elements, combined with event.target and event.currentTarget.
- What DOM element property tells you what type of element it is?
  Not sure about this one.
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a string of valid CSS selectors as its argument and returns the closest ancestor element, or itself, which matches the CSS selectors.
- How can you remove an element from the DOM?
  Using the .remove() method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By using event.target.closest.

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
