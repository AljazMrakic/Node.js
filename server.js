var http = require('http'); // http protocol
var fs = require('fs'); // file system
var dt = require('./date'); // refrencing a date script

http.createServer(function (req, res){ // creates a server
    fs.readFile('main_page.html', function(err, data){ // reads the main_page
        if(err) throw err; // if there is an error
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); // writes the data
        res.end(); // end of response
    });
}).listen(8080); // listens on port 8080