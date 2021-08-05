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
    host            :'########',  //  replace the # with your localhost name
    user            :'########',  //  replace the # with your username 
    password        :'########',  //  replace the # with your password
    database        :'########'   //  replace the # with your database name
})
// Get the data from database
app.get('',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')
        // replace the # mark's with your sql qurey
        connection.query('###################################', (err, rows) => {
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
       
        // replace the # mark's with your sql qurey
        connection.query('######################################', [req.params.id], (err, rows) => {
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
        
        // replace the # mark's with your sql qurey
        connection.query('######################################',[req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.send('the data has been deleted')
            }else{
                console.log(err)
            }
        })
    })
})
// add the data for database
app.post('',(req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err

        console.log('connected as id '+connection.threadId+'')
        
        //pass the your data as array to body-parser like this
        const {username , password , email} = req.body
        
        // replace the # mark's with your sql qurey
        connection.query('#################################################',[username,password,email],(err, rows) => {
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
        
        //pass the your data as array to body-parser like this
        const {id , username , password , email} = req.body
        
        // replace the # mark's with your sql qurey
        connection.query('##########################################',[username,password,email,id],(err, rows) => {
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
