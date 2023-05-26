# javascript-and-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?
  JSON is a text-based data format that exists as a string and is useful when you want to transmit data across a network.
- What are serialization and deserialization?
  Serialization is a process of converting an Object into a stream of buytes so that it can be transferred over a network or stored in a persistent storage. Deserialization is the opposite - you fetch a stream of bytes from a network or persistent storage and converit it back to the Object with the same state.
- Why are serialization and deserialization useful?
  Through serialization, a developer can perform actions like sending the object to a remote application by means of a web service, passing an object from one domain to another, passing an object through a firewall, or maintaining security or user-specific information across applications. Deserialization then enables us to recreate objects after they have been serialized for transmission over the wire, between applications, through firewalls, and more.
- How do you serialize a data structure into a JSON string using JavaScript?
  By using the JSON.stringify() method.
- How do you deserialize a JSON string into a data structure using JavaScript?
  By using the JSON.parse() method.

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
