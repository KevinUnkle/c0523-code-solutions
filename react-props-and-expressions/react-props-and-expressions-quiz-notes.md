# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  Props are arguments passed to a JSX tag.
- How do you declare and access props in a component?
Declare it similarly in the way an HTML attribute is declared, but you can pass any JavaScript value through them including objects, arrays, and functions. To access them, list them as a function argument and access them inside the code body.
function Avatar({ person, size })
<div>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
- How do you pass props to a component?
  Similar to how you give a function arguments in JavaScript
  function Avatar({ person, size }) {
  // person and size are available here
  }
  Person and size are passed into the Avatar component
- How do you write JavaScript expressions in JSX?
  You can put any valid JavaScript expression inside the curly brackets in JSX {{ }}

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
