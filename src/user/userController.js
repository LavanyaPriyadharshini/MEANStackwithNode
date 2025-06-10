

var userService = require("./userService")

 
//for getting the datas -it is a get method
var getDataControllerfn = async (req ,res) => 
{
    var employee = await userService.getDatafromDBService();
    res.send({"status":true , "data" :employee});
}



//registering a user and inserting records in the db

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



// Editing of the records using id

var updateUserController =async (req,res) => {

try{
    const userId= (req.params.id);
    const updatedData =(req.body);

 console.log("Updating user with ID:", userId);
        console.log("Update data:", updatedData);


             if (!userId || !updatedData) {
            return res.status(400).send({
                status: false,
                message: "Missing user ID or update data"
            });
        }

        const updatedUser = await userService.updateDBRecordsService(userId,updatedData);

        if(updatedUser){
            res.send({
                status: true,
                message: "User updated successfully",
                data: updatedUser
            })           
        }


        else {
            res.status(404).send({
                status: false,
                message: "User not found"
            });
        }
}

catch (error) {
        console.error("Error in updateUserController:", error);
        res.status(500).send({
            status: false,
            message: "Internal server error",
            error: error.message || error
        });
    }


}



//deleting a record

var DeleteUserController =async (req,res) => {

try{
    const userId= (req.params.id);
    const updatedData =(req.body);

 console.log("Updating user with ID:", userId);
        console.log("Update data:", updatedData);


             if (!userId || !updatedData) {
            return res.status(400).send({
                status: false,
                message: "Missing user ID or update data"
            });
        }

        const updatedUser = await userService.DeleteUserDBService(userId,updatedData);

        if(updatedUser){
            res.send({
                status: true,
                message: "User Deleted successfully",
                data: updatedUser
            })           
        }


        else {
            res.status(404).send({
                status: false,
                message: "User not found"
            });
        }
}

catch (error) {
        console.error("Error in DeleteUserController:", error);
        res.status(500).send({
            status: false,
            message: "Internal server error",
            error: error.message || error
        });
    }


}





//exporting the two controller methods

module.exports = {getDataControllerfn,createUserController,updateUserController,DeleteUserController};
