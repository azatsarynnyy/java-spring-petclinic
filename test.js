var http = require('http');
http.createServer(function (req, res) {}).listen(1110); // public endpoint, listening on all addresses
http.createServer(function (req, res) {}).listen(1111); // internal endpoint, listening on all addresses
http.createServer(function (req, res) {}).listen(1114); // none endpoint, listening on all addresses

http.createServer(function (req, res) {}).listen(2220, "localhost"); // public endpoint, listening on localhost
http.createServer(function (req, res) {}).listen(2221, "localhost"); // internal endpoint, listening on localhost
http.createServer(function (req, res) {}).listen(2223, "localhost"); // none endpoint, listening on localhost
