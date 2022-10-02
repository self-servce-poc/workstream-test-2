const express = require('express')
const app = express()
const path = require('path')
const port = 3000

/*
* Default route for the web app
*/
// app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))
app.use(express.static('public'));
/*
* Route to render HTML Page
*/
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))