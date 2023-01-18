const app = require("./src/app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectionToMongoDB = require("./config/database");

connectionToMongoDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on 127.0.0.1:${PORT}`);
});