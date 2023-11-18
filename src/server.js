// importing express library 
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


// create express application
const app = express()


app.use(bodyParser.json())

// create a GET API
app.get('/', (req, res) => {
    // res.send('welcome to express.js app')
    let htmlFile = path.join(__dirname + '/index.html')
    res.sendFile(htmlFile)
})

app.get('/send', (req, res) => {
    console.log(req.query['firstName']);
    let nm = req.query['firstName']
    res.send('Your name is ' + nm + ', welcome.')
})

app.post('/send',(req,res)=>{
    console.log(req.body);
    res.send('I am from send POST API')
})


// running the express application
app.listen(8080, () => {
    console.log('Backend application is running on port 8080');
});