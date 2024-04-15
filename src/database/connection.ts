import { Sequelize } from "sequelize";

const { NODE_SQL_HOST, NODE_SQL_NAME, NODE_SQL_USERNAME, NODE_SQL_PASSWORD } =
  process.env;
  
const db = new Sequelize(
  NODE_SQL_NAME ?? "",
  NODE_SQL_USERNAME ?? "",
  NODE_SQL_PASSWORD ?? "",
  {
    host: NODE_SQL_HOST ?? "",
    dialect: "mssql",
    logging: false,
  }
);

export default db;