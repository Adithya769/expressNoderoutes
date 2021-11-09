const mysql = require('mysql2')
var express = require('express');
// const {scheme} = require('mongoose');

var router = express.Router();
router.use(express.json());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee',
    multipleStatements: true
    });
    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });


//Router to GET specific item detail from the MySQL database
router.get('/' , (req, res) => {
    mysqlConnection.query('SELECT * from Items', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    // console.log(rows);
    else
    console.log(err);
    })
    } );
//Router to GET specific item detail from the MySQL database
router.get('/:id' , (req, res) => {
    mysqlConnection.query('SELECT * from Items WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    router.get('/add' , (req, res) => {
        mysqlConnection.query('SELECT * from Items WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
        } );
module.exports=router;

