/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const fg = require('fast-glob')

const directory = process.argv[2]

const files = fg.sync(`${directory}/*.jpg`)

for (const file of files) {
  fs.rename(file, `${directory}/${uuidv4().replace(/-/g, '')}.jpg`, (err) => {
    if (err) {
      console.error(err)
    }
  })
}
