

var express = require('express');

var server = express();

var mongoose = require('mongoose');

var routes = require('./routings/routes') // now it goes from the server.js to the routing folder nd inside that it calls the routes.js

// Replace this with your actual MongoDB URL
const dbUrl = "mongodb://localhost:27017/nodeCRUD";


// Use async/await to handle the connection, this is to check that whether the db is connected or not
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB started, it is connecting");
})
.catch((error) => {
  console.error("Error connecting to DB:", error);
});




//calling the below function
server.use(express.json());


//setting up the port

server.listen(8000,
function check(error){
    if(error)
    {
        console.log("error");
    }

    else{
        console.log("startedd the server port is running")
    }
});



//to check the working ,after writing the below code, cut and paste it after the port number in the above
//so it will be easy for writing 
// function check(error){
//     if(error)
//     {
//         console.log("error");
//     }

//     else{
//         console.log("startedd the server port is running")
//     }
// }

//after this run "node server.js"

//output -- if you see this output, the function is executing correctly

// C:\Users\lavanyap\Desktop\MEAN Stack>node server.js
// startedd the server port is running