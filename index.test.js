const { getImageMime } = require('./index')

const randomStr = 'dafkqlwjelkqwje'
const png = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACGFjVEwAAAAUAAAAABwt8VIAAAAaZmNUTAAAAAAAAABkAAAAZAAAAAAAAAAAAEsD6AEAzUsGtwAAEhFJREFUeNrtmwuMHVd5x3'
const webp =
  'UklGRnq0AABXRUJQVlA4IG60AABQpgKdASoCA9gAPm0qkUYkIiGhL1Tt+IANiWgAtopAV39UO6z5/+c/cH8sPlU5B7RPgH3n/L/9n2jdenYfmEdOfp/2if7/1p/0b/X+xD/Rv8P+0Xrx/uZ79f3d9Wf7nep5/2f3b+A39I9Un+tf6z//9l/6Vvm0f/D2mv7B/2fTc0zX7j43fsfWv+mfd/8r/D/6D1G/'
const jpeg =
  '/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAOw1ESAAQAAAABA'
const gif =
  'R0lGODlhsASvBPcAAAQBAQ0MDAsGBBIODBUIBRQRDhoTDg4OERIOERQUFRoVFBsZFhYWGBkXGRsbHBYZGwoSFyIdGyQaFi0UD'
const prefixPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA'
const prefixJpeg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/'
const prefixGif = 'data:image/gif;base64,R0lGODlh4AHgAfcBMQDO9wD/AAECAQHlyQL2mQM3EgSLUAfO6QkIBwu78g8NDQ8fGRAKBhAPEhQTEhcWFxcaGRkYGBkZGRwXFh4dGx4dIB8jbh/CjyAeHSDumiFolCIeHSKJiiMjKiMuTSQcGSS+vCYkIief7ygcGCgoLClKXiolIissNC0WES0mIy4qKi'
const hexTestJpeg = '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgk'
test('return null on non base64', () => {
  expect(getImageMime(randomStr)).toBe(null)
})

test('parse png success', () => {
  expect(getImageMime(png)).toBe('image/png')
  expect(getImageMime(prefixPng)).toBe('image/png')
})

test('parse webp success', () => {
  expect(getImageMime(webp)).toBe('image/webp')
})

test('parse gif success', () => {
  expect(getImageMime(gif)).toBe('image/gif')
  expect(getImageMime(prefixGif)).toBe('image/gif')
})

test('parse jpeg success', () => {
  expect(getImageMime(jpeg)).toBe('image/jpeg')
  expect(getImageMime(hexTestJpeg)).toBe('image/jpeg')
  expect(getImageMime(prefixJpeg)).toBe('image/jpeg')
})
