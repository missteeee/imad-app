var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content = {
    title: 'ARTICLE ONE | TEJASWINI SRIDHAR',
    date: 'august 7th 2017',
    content:  `<p>
        These lines are the from the book "THE PRIDE AND PREJUDICE".
        </p>
        <p>
        I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.

      </p>
      <p>
        I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.
        -Jane Austen, Pride and Prejudice
      </p>`
};
function createTemplate (data) {
    var tile=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=
   `<html>
    <head>
    <title>
      ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
     
      </head>
  <body>
      <div class="container">
    <div>
      <a  href="/">Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
    ${date}
    </div>
    <div>
      ${content}
    </div>
    </div>
  </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
     res.send(createTemplate(article-one));
});
app.get('/article-two', function (req, res) {
    res.send("article two requested and will be served");
});
app.get('/article-three', function (req, res) {
    res.send("article three requested and will be served");
});
app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
