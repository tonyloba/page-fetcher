const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {

  //EDGE cases : 
  // console.log('error:', err); // Print the error 
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  

  // fs.writeFile( file, data, callback )
  fs.writeFile( path, body, (err) => {
    if (err) {
      console.error(err);
      return;
    } 
    console.log(`Downloaded and saved ${body.length} bytes to : ${path}`);
  });
});