const express = require('express');
const app = express();
app.use(express.static('../web'));
app.listen(8080,function(){
	console.log("listen to 80");
});
