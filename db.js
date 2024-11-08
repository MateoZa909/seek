const mysql = require('mysql2');

const dbSeek = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seek'
});

dbSeek.connect((err) => {
    if (err) {
        console.error('Error al conectar');
        process.exit(1);
    }
    console.log('Conexion exitosa a la base de datos');
})

module.exports = dbSeek;