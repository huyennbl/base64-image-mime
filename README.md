# Base64-image-mime

## A small utility to get mimetype from base64-encoded images

### Currently support:
- image/png
- image/gif
- image/jpeg
- image/svg+xml
- image/webp

Works for with prefix & without prefix base64 encoded image

### Usage
```js
const { getImageMime } = require('base64-image-mime')

// below are just a part of base64 image for demo purpose, not a full image

const pngWithPrefix = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAXCAYAAAB9J90oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAA'
console.log(getImageMime(pngWithPrefix))
// => image/png

const pngWithoutPrefix = 'iVBORw0KGgoAAAANSUhEUgAAACoAAAAXCAYAAAB9J90oAAAAA'
console.log(getImageMime(pngWithoutPrefix))
// => image/png

const jpgWithPrefix = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAF'
console.log(getImageMime(jpgWithPrefix))
// => image/jpeg

const jpgWithoutPrefix = '/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAF'
console.log(getImageMime(jpgWithoutPrefix))
// => image/jpeg
```


## License

MIT © [huyennbl](https://github.com/huyennbl)