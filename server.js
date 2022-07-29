const express = require('express');
const app = express();
const fs = require("fs");
const port = Process.env.PORT || 8081;

app.get('/', (req, res) => {
   fs.readFile( __dirname + "/" + "projects.json", 'utf8', (err, data) => {
      // console.log( data );
      res.end( data );
   });
})

app.listen(port, () => {
   // const host = server.address().address;
   console.log("Server listening at port", port)
});