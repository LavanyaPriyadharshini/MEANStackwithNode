

var userService = require("./userService")

 
//for getting the datas -it is a get method
var getDataControllerfn = async (req ,res) => 
{
    var employee = await userService.getDatafromDBService();
    res.send({"status":true , "data" :employee});
}


var createUserController = async (req, res) => {

     console.log("Received request body:", req.body); // Debug log

    try {
        console.log("Incoming request body:", req.body);

        // Check for missing fields early
        if (!req.body || !req.body.name || !req.body.address || !req.body.phone) {
            return res.status(400).send({
                status: false,
                message: "Missing required user fields (name, address, phone)"
            });
        }

        const status = await userService.createUserDBService(req.body);

        if (status) {
            res.send({ status: true, message: "User created successfully" });
        } else {
            res.status(500).send({ status: false, message: "Failed to create user" });
        }
    } catch (error) {
        console.error("Exception caught in controller:", error);
        res.status(500).send({
            status: false,
            message: "Internal server error",
            error: error.message || error
        });
    }
};


//exporting the two controller methods

module.exports = {getDataControllerfn,createUserController};
