

var userModel = require('./userModel');

//getDatafromDBService -- method
module.exports.getDatafromDBService = async () => {
    try {
        const result = await userModel.find({});
        return result;
    } catch (error) {
        throw error; // Or: return []; if you want to return an empty array on error
    }
};



// create User DB service method for registering or posting a data
module.exports.createUserDBService = async (userDetails) => {
    try {
        console.log("Inside DB service:", userDetails); // Debug log

        if (!userDetails || !userDetails.name || !userDetails.address || !userDetails.phone) {
            console.error("Invalid user details:", userDetails);
            return false;
        }

        const userModelData = new userModel({
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone
        });

        await userModelData.save(); // ✅ Use await instead of callback

        return true;
    } catch (error) {
        console.error("MongoDB Save Error:", error);
        return false;
    }
};



// update service for editing the records

module.exports.updateDBRecordsService = async (userId, updateData) => {
    try {
        const result = await userModel.findByIdAndUpdate(
            userId,
            updateData,
            { new: true } // return updated document
        );
        return result;
    } catch (error) {
        throw error;
    }
};



//deleting the record from the collection

module.exports.DeleteUserDBService = async (userId, updateData) => {
    try {
        const result = await userModel.findByIdAndDelete(
            userId,
            updateData,
            { new: true } // return updated document
        );
        return result;
    } catch (error) {
        throw error;
    }
};


