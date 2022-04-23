const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27018/basecompras?authSource=basecompras";
mongoose.connect(uri, {});