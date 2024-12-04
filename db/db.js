const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 3000


function checkValid(usr, pwd){
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
          console.error(err);
          return false;
        }
        data = JSON.parse(data).users;

        data.forEach((d) => {
            if (d.email === usr && d.password === pwd){
                return true;
            }
        });
      });

    return false;
}

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})