/**
 * Warning:
 * This server script is not intended to be used on production.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.HTTP_PORT || 4000;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.eot': 'appliaction/vnd.ms-fontobject',
  '.ttf': 'aplication/font-sfnt',
};

http.createServer((req, res) => {
  let pathname = path.join(__dirname, '/dist/', req.url);

  fs.exists(pathname, (exist) => {
    if (!exist) {
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    if (fs.statSync(pathname).isDirectory()) {
      pathname += '/index.html';
    }

    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        const { ext } = path.parse(pathname);
        res.setHeader('Content-type', mimeType[ext] || 'text/plain');
        res.end(data);
      }
    });
  });
}).listen(port, () => {
  process.stdout.write(`Server listening on port ${port}\n`);
});
