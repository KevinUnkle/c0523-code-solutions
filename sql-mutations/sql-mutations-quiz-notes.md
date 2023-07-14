# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create, Read, Update, and Delete.
- How do you add a row to a SQL table?
  To add a row you use insert into "..."("..", "...", "...", "...")
  values ('..', '...', '...', '...')
- How do you add multiple rows to a SQL table at once?
  By separating the entire "values" parentheses with a comma.
- How do you update rows in a database table?
  By using an "update" statement with a "set" and "where" clause.
  update "actors"
  set "firstName" = 'Baby',
  "lastName" = 'Yoda'
  where "actorId" = 15;
- How do you delete rows from a database table?
  By using the delete method with a from and where clause.
  delete
  from "products"
  where "productId" = 24
  returning \*;
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Because you only want to target specific rows, as opposed to updating or deleting every row.
- How do you accidentally delete or update all rows in a table?
  By using delete or update with no where clause.
- How do you get back the modified row without a separate `select` statement?
  By using the returning \* clause.

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
