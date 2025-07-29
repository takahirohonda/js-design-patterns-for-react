# Code challenge tracker

## Current focus

I'm working through all the expert difficulty level challenges: https://programiz.pro/community-challenges/javascript?difficulty=Expert

2. **29/07/2025 - coinChange**

1. **29/07/2025 - ginortSOrder**

## Notes

Run this for Programiz site to enable select.

```js
document
  .querySelector('.community-challenge-description.disable-select')
  .classList.remove('disable-select')
```

This CSS is blocking selection

```css
* > .community-challenge-description.disable-select {
  user-select: none;
  -moz-user-select: none;
  -webkit-text-select: none;
  -webkit-user-select: none;
}
```
