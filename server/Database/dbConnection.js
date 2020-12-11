const mongoose = require("mongoose");
const URI = "mongodb+srv://kissmyass:avichal.22@cluster0.330fm.mongodb.net/kissmyass?retryWrites=true&w=majority";
module.exports =  dbConnect = async () =>
  {
    await mongoose.connect(URI,
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
      },()=>console.log("db Connected"));
  };
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
connection.on('disconnected',function(){
    console.log('database is disconnected successfully');
});