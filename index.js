// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(process.env.PORT || port, () => console.log('Node server running at http://localhost:${port}'));


// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();

// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
console.log('working on 3000');


//add the router
// app.use('/', router);
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');