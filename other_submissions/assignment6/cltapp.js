// Node.js must be downloaded and installed on your local machine
var http = require('http'), fs = require('fs'), url = require('url');
var path = require('path');

// Create an http server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true), fileName = "." + q.pathname;

    if (fileName == './') fileName = 'index.html'; // Set the default file to index.html
    else if (fileName == path.basename('index.html')) path.join('/', 'index.html'); // Set the file to index.html
    // Set the file to introduction.html
    else if (fileName == path.basename('introduction.html')) path.join('/', 'introduction.html');

    // Read the html file for the path
    fs.readFile(fileName, function(fileErr, fileData) {
        // Handle client error
        if (fileErr) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            console.error(`${fileErr}`);
            return res.end("404 Not Found");
        }
        
        // Handle the file if there are no errors
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fileData); // Write the file data to the response
        return res.end();
    });
}).listen(3000);

// Use the command node cltapp.js in the terminal to run the client app
console.log('Server running at http://127.0.0.1:3000/');