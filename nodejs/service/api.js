const express = require('express');
const app = express.Router();
const con = require("./db");
const db = con.db;

app.get("/api/getdata", (req, res) => {

    const sql = `SELECT * FROM survey ORDER BY ts DESC`;
    console.log(sql);
    db.query(sql).then(r => {
        res.status(200).json({
            data: r.rows
        })
    })
});

app.post("/api/survey_insert", async (req, res) => {
    const { data } = req.body;
    let pid = Date.now()
    await db.query(`INSERT INTO survey(pid, ts)VALUES('${pid}', now())`)
    let d;
    for (d in data) {
        // console.log(d, data[d]);
        if (data[d] !== '' && d !== 'geom') {
            let sql = `UPDATE survey SET ${d}='${data[d]}' WHERE pid='${pid}'`;
            await db.query(sql)
        }
    }

    if (data.geom !== "") {
        let sql = `UPDATE survey SET geom = ST_GeomfromGeoJSON('${JSON.stringify(data.geom.geometry)}') 
            WHERE pid='${pid}'`;
        await db.query(sql)
    }
    res.status(200).json({
        data: "success"
    })
});

app.post("/api/get_feature", async (req, res) => {
    const { layer, text } = req.body;
    let sql = `SELECT tb, ST_ASGeoJSON(geom) as geom FROM ${layer} WHERE tb ILIKE '%${text}%'`;
    console.log(sql);
    db.query(sql).then(r => {
        res.status(200).json({
            data: r.rows
        })
    })
});

module.exports = app;