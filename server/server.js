const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
var PORT = 3000 || process.env.PORT;

app.get('/',(req,res)=>
{
    try
    {
        res.json({connection:'successfully connected'});
        console.log("connected");
    }
    catch(e)
    {
        res.json({connection:'unable to connect to the server'});
        console.log("error : connection api : ",e);
    }
});

io.on('connection',socket=>
{
    socket.on("hello", (arg) => {
        console.log(arg);
      });
});

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`)); 