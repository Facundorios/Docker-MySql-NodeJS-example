// import express from "express";

// import mysql from "mysql2/promise";
// import mongoose from "mongoose";

// const app = express();

// // docker run --name Docker-MySql-NodeJS-example -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mysqlpassword mysql
// const mySqlClient = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "mysqlpassword",
// });

// // docker run --name myMongoContainer -p 27017:27017 mongo
// const myMongoClient = await mongoose.connect("mongodb://localhost:27017/myapp");
// console.log(myMongoClient.connection.db.databaseName);

// const mySqlResponse = await mySqlClient.query("SELECT 1 + 1");
// console.log(mySqlResponse);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
