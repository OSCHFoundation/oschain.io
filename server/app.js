const express = require('express');
var compression = require('compression')

const app = express();
app.use(compression());
app.use(express.static('../web'));
/*app.use(function(req,res,next){
	console.log('aaa');
	next();
})*/
app.listen(1110,function(){
	console.log("listen to 80");
});
