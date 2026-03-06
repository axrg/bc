import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "srv1010.hstgr.io",
  user: "u554104957_assessment2",
  password: "Y5*lt9Q^j",
  database: "u554104957_assessment2",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;