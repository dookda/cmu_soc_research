const express = require('express');
const app = express.Router();
const con = require("./db");
const db = con.db;

app.get("/alcohol-api/getdata", (req, res) => {

    const sql = `SELECT * FROM ud_alcohol_data ORDER BY ts DESC`;
    db.query(sql).then(r => {
        res.status(200).json({
            data: r.rows
        })
    })
});

module.exports = app;