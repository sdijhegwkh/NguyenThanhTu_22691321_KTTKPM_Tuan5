const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;


const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root123",
  database: "testdb"
});

// connect DB
db.connect((err) => {
  if (err) {
    console.log("❌ Lỗi connect MySQL:", err);
    return;
  }
  console.log("✅ Connected to MySQL");
});

// API test
app.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) return res.send("DB error");
    res.send(`DB OK: ${results[0].result}`);
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server chạy port ${PORT}`);
});