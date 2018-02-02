const express = require('express');
var compression = require('compression')

const app = express();
app.use(compression());
app.use(express.static('../web'));
app.listen(80,function(){
	console.log("listen to 80");
});
