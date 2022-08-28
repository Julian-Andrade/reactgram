const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Connection with MongoDB
const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bracy.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(`Conectado ao Banco de Dados`);
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
