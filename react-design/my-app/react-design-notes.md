# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?

1. Identifying pieces that would make good components from the UI mockup. 2. Determing the UI state that must be held in the components and where that state should live. 3. Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.

- How does data flow in React?
  In a unidirectional data flow. (you can only transfer data from parent to child, not vice versa)
- How can children components modify state in their parents?
  By passing the state handle function as a prop of the child component.

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
