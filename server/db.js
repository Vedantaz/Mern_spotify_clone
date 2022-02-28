const mongoose = require('mongoose');
async function connectToMongo() {
    await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Database connected successfully!"))
        .catch(err => console.log(err))
}
module.exports = connectToMongo;