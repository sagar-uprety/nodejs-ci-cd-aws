const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hey there! Welcome to CI-CD Demo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("Hello")
})

module.exports=app;
