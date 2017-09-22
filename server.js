var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles  = {
    'article-one': {
    title: 'Article One | Krishna',
    heading: 'Article One',
    date: 'Sep 2 2017',
    content: ` <p>
                    This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!
                </p>
                <p>
                    This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!
                </p>
                <p>
                    This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!
                </p>`
    },
    'article-two': {
    title: 'Article Two | Krishna',
    heading: 'Article Two',
    date: 'Sep 2 2017',
    content: ` <p>
                    This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!
                </p>`
    },
    'article-three':{
    title: 'Article Three | Krishna',
    heading: 'Article Three',
    date: 'Sep 2 2017',
    content: ` <p>
                    This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!This is Paragraph one... Be HUMBLE, Sit down Bitch!!
                </p>`
    }
};


function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    
            <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="container">
                        <a href='/'>Home</a>
                        <hr/>
                        <h3>${heading}</h3>
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

var counter = 0;
app.get('/counter',function(req , res){
    counter = counter + 1;
    res.sendFile(counter.toString());
});

app.get('/:articleName',function(req,res){
    //articleName == article-one, article-two
    //articles([articleName]) == [] content object of article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
})

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
})

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
})

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
