# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
They're used to return a promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
In an async function javascript pauses the function execution.
- When do you use `async`?
At the start of a function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
You use await when you want to use a promise. If the function being called is asynchronous.
- How do you handle errors with `await`?
Using try and catch methods.
- What do `try`, `catch` and `throw` do? When do you use them?
The try statement defines a code block to run. The catch statement defines a code block to handle any error.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
Your test will complete before the promise returned resolves or rejects. You never get the rejection, and you never find out.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
Callbacks. I don't really understand what is going on with promise.then or async/await.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
