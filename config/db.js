const mysql = require('mysql2');

const mySqlConnection  = mysql.createConnection({
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'book-collection',
});

mySqlConnection.connect((error) => {
    if(error) {
     console.log('Not connected', error);
    } else {
     console.log('Database Connected Successfully..!!');
    }
});
   
module.exports = mySqlConnection;
