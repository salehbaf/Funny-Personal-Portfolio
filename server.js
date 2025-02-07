
//bringing in express.js so we can use it 
const express = require('express'); 
const path = require('path');    //helps with file paths 
const app = express();

const HTTP_PORT = process.env.PORT || 8080;   //set up the server to use prot 8080

//tells express to serve static files (css, img, js) from the "public" folder 
app.use(express.static('public'));

//when someone goes to the home page, show them home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

//when aomeone goes to about show them about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Start the server
app.listen(HTTP_PORT, () => {
    console.log(`Server is running at http://localhost:${HTTP_PORT}`);
});
