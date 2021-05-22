const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//mysql connetion
const pool = mysql.createPool({
    connectionLimit :10,
    host            :'localhost',
    user            :'root',
    password        :'',
    database        :'nodeapi'
})
// Get the data from database
app.get('',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')

        connection.query('SELECT * FROM person', (err, rows) => {
            connection.release()
            if (!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})
// Get the data from database by ID
app.get('/:id',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')

        connection.query('SELECT * FROM person WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})
// Delete the data from database
app.delete('/:id',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')

        connection.query('DELETE FROM `person` WHERE id = ?',[req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.send('the data has been deleted')
            }else{
                console.log(err)
            }
        })
    })
})
// add the data from database
app.post('',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')
        
        const {username , password , email} = req.body
        
        connection.query('INSERT INTO `person`(`username`, `password`, `email`) VALUES (?,?,?)',[username,password,email],(err, rows) => {
            connection.release()
            if (!err) {
                res.send('new data has been added')
            }else{
                console.log(err)
            }
        })
        console.log(req.body)
    })
})
// add new data to database
app.put('',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        
        console.log('connected as id '+connection.threadId+'')
        
        const {id , username , password , email} = req.body
        
        connection.query('UPDATE `person` SET `username`= ?,`password`= ?,`email`= ? WHERE id = ?',[username,password,email,id],(err, rows) => {
            connection.release()
            
            if (!err) {
                res.send('the data with username : '+username+' has been updated')
            }else{
                console.log(err)
            }
        })
        console.log(req.body)
    })
})
// listen on enviroment port on 5000
app.listen(port, () => console.log('conncted on port : '+port+''))