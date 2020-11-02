const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World! This is my home page.')
})

app.get('/artists', (req, res) => {
  const artists = [
    {
      name: 'Griz'
    },
    {
      name: 'Odesza'
    },
    {
      name: 'Disclosure'
    },
    {
      name: 'Louis the Child'
    },
  ];  
  
  res.json(artists)
  });


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})