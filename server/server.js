const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var User = require('./Database/User');
const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
var dbConnect = require('./Database/dbConnection');
var fetchUser = require('./Database/dbConnection');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
var PORT = 3000 || process.env.PORT;

const clientType=
{
    ADMIN: 'admin',
    AGENT: 'agent'
}; 

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

app.post('/api/v1/signUp',(req,res)=>
{
    try
    {
        const {userName,password,email} = req.body;
        console.log(req.body);
        let user ={};
        user.userName = userName;
        user.password = password;
        user.email = email;
        user.approved = false;
        user.clientType = clientType.AGENT;
        user.loginLastDate = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        if(user)
        {
            console.log(user);
            dbConnect();
            let UserModel = new User(user);
            UserModel.save();
            console.log(UserModel);
            res.json({user:UserModel});
        }
        else
        {
            res.status(500).json({message:"Internal server error.",data:""}); 
        }

    }
    catch(e)
    {
        console.log("error : login api : ",e);
        res.status(500).json({message:"Internal server error.",data:""});
    }
});

app.post('/api/v1/login',async(req,res)=>
{
    try
    {
        const {userName,password} = req.body;
        dbConnect();
        User.find(req.body,(err,response)=>
        {
            if(err)
            {
                console.log(err);
                res.status(500).json({message:"Internal server error.",data:{}});
            }
            else
            {
                if(response[0] != undefined && response[0].approved)
                {
                    console.log(response[0].approved);
                    var data = [];
                    response.forEach(element => {
                        data.push(element);
                    });
                    res.status(200).json({data:data[0],message:"success"})
                }
                else
                {
                    res.status(201).json({message:"username or password is incorrect.",data:{}});
                }
            }
        });

    }
    catch(e)
    {
        console.log(e);
        res.status(201).json({message:"Internal server error.",data:{}});
    }
});

// io.on('connection',socket=>
// {
//     socket.on("hello", (arg) => {
//         console.log(arg);
//       });
// });

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`)); 