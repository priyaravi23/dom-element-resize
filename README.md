# dom-element-resize
Resize Observer JavaScript API

![](images/resize.png)

## Resize Observer API
- Allow elements to be notified when their size changes
- Alternative to using window.resize which trigger a callback every single time the size of the window changes

```javascript
const myObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    console.log('width', entry.contentRect.width);
    console.log('height', entry.contentRect.height);
  });
});

const someEl = document.querySelector('.some-element');
myObserver.observe(someEl);
```