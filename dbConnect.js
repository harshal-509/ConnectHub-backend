const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri = process.env.DB_CONNECT_URI;
    try {
        const connect = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
