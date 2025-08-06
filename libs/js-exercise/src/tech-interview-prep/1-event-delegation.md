# What is Event Delegation?

Event delegation is a technique where you attach a single event listener to a **parent element** instead of attaching listeners to individual child elements.  
Because events bubble up through the DOM, you can catch events triggered by child elements on the parent.

---

## Example: Handling Clicks on List Items

### HTML

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## JS

```js
const list = document.getElementById('myList')

list.addEventListener('click', (event) => {
  // Check if the clicked element is an <li>
  if (event.target && event.target.nodeName === 'LI') {
    console.log('Clicked on list item:', event.target.textContent)
  }
})
```

Why Use Event Delegation?
Attach one event listener to the parent instead of many on children.

Works for dynamically added elements as well.

### Bonus: Handling Dynamically Added Elements

Because the event listener is on the parent, if new `<li>` elements are added dynamically, they will still trigger the event.

Improves performance and keeps your code simpler.

```js
const newItem = document.createElement('li')
newItem.textContent = 'Item 4'
list.appendChild(newItem)
```
