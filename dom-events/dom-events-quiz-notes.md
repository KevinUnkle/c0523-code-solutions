# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging purposes and experimenting with code.
- What is the purpose of events and event handling?
  Events provide mechanisms by which an action can be taken automatically when the event occurs. Event handling is for the reaction to an event, which is a block of code that runs when the event fires.
- Are all possible parameters required to use a JavaScript method or function?
  Yes.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The addEventListener() method.
- What is a callback function?
  A function that is passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routing or action.
- What object is passed into an event listener callback when the event fires?
  A callback function.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  A method used to get the element that was the target of the event - the innermost element.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The top example is the correct way to use addEventListener. The bottom is the incorrect way, it will log the empty function handleClick().

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
