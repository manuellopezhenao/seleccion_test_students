
import * as express from 'express';
import { sequelize } from "./db/connection";

const app = express();

//Routes
app.use(require('./routes/courses'));
app.use(require('./routes/students'));
app.use(require('./routes/coursestudents'));

//Connection DATABASE
dbConnection();
async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

//Listen Server
app.listen(3001, () => {
    console.log('Example app listening on port 3000!');
});


