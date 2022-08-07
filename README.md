# Lazy Loading JS

Most Lazy Loading libraries have you to change src to data-src and use a fake/empty image in src. But this library can provide Lazy Loading feature without changing your image elements or document.

Pure Javascript without Jquery or extra code.

**Demo:** https://basemax.github.io/LazyLoadingJS/

## Using

```html
<script type="text/javascript" src="https://basemax.github.io/LazyLoadingJS/lazyloading.js"></script>
```

### Example

```javascript
<script type="text/javascript">
var lazyloading = LazyLoading({
    'selector': 'img',
    'attribute': 'data-src'
});
</script>
```

Or

```javascript
<script type="text/javascript">
document.querySelectorAll("img").forEach(img => {
  const src = img.getAttribute("src");
  if (src !== null) {
    img.setAttribute("data-src", src);
    img.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }
});

var lazyloading = LazyLoading({
    'selector': 'img',
    'attribute': 'data-src'
});
</script>
```
