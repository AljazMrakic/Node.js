var http = require('http'); // http protocol
var url = require('url'); // url module
var fs = require('fs'); // file system

http.createServer(function (req, res){ // creates a server
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data){ // reads the main_page
        if(err) { // if there is an error
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(uc("404 Not Found")); // writes error 404
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); // writes the data
        res.end(); // end of response
    });
}).listen(8080); // listens on port 8080