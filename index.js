const express = require('express');
const app = express();

app.use(express.json());

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname/index.html));
})

app.get('/cds',function(req,res){
    res.sendFile(path.join(__dirname/cds.html));
});

app.listen(3000, function() {
    console.log("Server is running on server 3000")
})