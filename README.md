# Base64-image-mime

## A small utility to get mimetype from base64-encoded images
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
### Currently support mime-type:
- image/png
- image/gif
- image/jpeg
- image/svg+xml
- image/webp


### Installation
```
npm install base64-image-mime

// or with yarn

yarn add base64-image-mime
```
### Usage
Can detect both with prefix & without prefix base64 encoded image
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