const mongoose = require("mongoose");

const DB = process.env.MONGO_URI.replace("<PASSWORD>", process.env.PASSWORD);

const connectionToMongoDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        const connection = await mongoose.connect(DB);
        console.log(`MongoDB connected successfully! 🎉 via ---> ${connection.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    };
};

module.exports = connectionToMongoDB;