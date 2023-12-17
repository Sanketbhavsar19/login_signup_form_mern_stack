// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"6761",
//     database:"signup"
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (username, email, password, confirm_password) VALUES (?, ?, ?, ?)";
//     const values = [
//         req.body.username,
//         req.body.email,
//         req.body.password,
//         req.body.confirm_password
//     ];

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.error('Error executing SQL query:', err);
//             return res.json({ error: 'Error in database operation' });
//         }
//         return res.json({ success: true, data });
//     });
// });

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"6761",
//     database:"signupdb"
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// app.post('/signupdb', (req, res) => {
//     const sql = "INSERT INTO login (username, email, password, confirm_password) VALUES (?, ?, ?, ?)";
//     const values = [
//         req.body.username,
//         req.body.email,
//         req.body.password,
//         req.body.confirm_password
//     ];

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.error('Error executing SQL query:', err);
//             return res.json({ error: 'Error in database operation' });
//         }
//         return res.json({ success: true, data });
//     });
// });

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// server/server.js

// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "6761",
//     database: "signup"
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (username, email, password, confirm_password) VALUES (?, ?, ?, ?)";
//     const values = [
//         req.body.username,
//         req.body.email,
//         req.body.password,
//         req.body.confirm_password
//     ];

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.error('Error executing SQL query:', err);
//             return res.json({ error: 'Error in database operation' });
//         }
//         return res.json({ success: true, data });
//     });
// });

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });




const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6761",
    database: "signupdb"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/signupdb', (req, res) => {
    const sql = "INSERT INTO login (username, email, password, confirm_password) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.confirmPassword  // corrected field name
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.json({ error: 'Error in database operation' });
        }
        return res.json({ success: true, data });
    });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




