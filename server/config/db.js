import mysql2 from "mysql2"

const db= mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Ritik@20",
    database:"Dairy"
});

db.connect((err)=>{
    if(err)
    {
        console.log("Database Connection Failed ", err)
    }
    else
    {
        console.log("Database connected succesfully")
    }
})

export default db;