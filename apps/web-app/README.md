## Progress...

### Adding router and use view transitions API

Router...

```js
if (pageElement) {
  function changePage() {
    // get current page element
    let currentPage = document.querySelector('main').firstElementChild
    if (currentPage) {
      currentPage.remove()
      document.querySelector('main').appendChild(pageElement)
    } else {
      document.querySelector('main').appendChild(pageElement)
    }
  }
  // Progressive Enhancement
  if (!document.startViewTransition) {
    changePage()
  } else {
    document.startViewTransition(() => changePage())
  }
}

window.scrollX = 0
```

Animation

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(60px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-60px);
  }
}

::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(
        0.4,
        0,
        0.2,
        1
      ) both slide-to-left;
}

::view-transition-new(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 300ms
      cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}

/* keep header out of transition */
body > header {
  view-transition-name: main-header;
}
```
