const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World ritesh!')
})

app.get('/twitter', (req, res) => {
    res.send('RiteshA18167346')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code </h1>')
})

app.get('/youtube', (req, res ) => {
    res.send('<h2>chai aur code </h2> ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})