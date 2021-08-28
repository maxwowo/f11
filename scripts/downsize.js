/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp')
const fg = require('fast-glob')

const THUMBNAIL_WIDTH = 400
const FULL_IMAGE_HEIGHT = 800

const directory = process.argv[2]

const files = fg.sync(`${directory}/*.jpg`)

for (const file of files) {
  const filename = file.split('/').slice(-1)[0].split('.')[0]

  sharp(file)
    .resize({ width: THUMBNAIL_WIDTH })
    .webp({ quality: 100 })
    .toFile(`${directory}/${filename}_thumbnail.webp`)

  sharp(file)
    .resize({ height: FULL_IMAGE_HEIGHT })
    .webp({ quality: 100 })
    .toFile(`${directory}/${filename}.webp`)
}
