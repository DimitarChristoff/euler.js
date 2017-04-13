#!/usr/bin/env node
const glob = require('glob')
const path = require('path')

const files = glob.sync('src/problem-*.js').sort()

require('colors')

process.cwd('src')
files.forEach(f => {
  console.log('____________________________')
  console.log(` starting ${f.yellow}`)
  console.time(f.red)
  require(`./${path.basename(f, '.js')}`)
  console.timeEnd(f.red)
})