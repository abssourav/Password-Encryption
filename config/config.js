require('dotenv').config()

const dev = {
    app:{
        port:process.env.PORT || 4000
    },
    db:{
        db_url:process.env.MONGO_URL || "mongodb://localhost:27017/userDbAuth"
    }
}

module.exports = dev