const mongo = require("mongoose");
const doenv = require("dotenv");

doenv.config();

async function conectaMongo() {
    await mongo.connect(process.env.MONGO_URI)
};

module.exports = conectamongo();

