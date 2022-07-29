const express = require('express');
const app = express();
const fs = require("fs");

app.get('/', (req, res) => {
   fs.readFile( __dirname + "/" + "projects.json", 'utf8', (err, data) => {
      console.log( data );
      res.end( data );
   });
})

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})