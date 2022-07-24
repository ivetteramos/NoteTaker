const routes = require('express').Router();
const fs = require('fs')// write file system
const { v4: uuidv4 } = require('uuid'); 

routes.get('/notes', (req, res)=> {
    const db = JSON.parse(fs.readFileSync("db/db.json"))
    res.json(db);
});


// take the form data from the server and create a new object named newNote.Parse takes the object info and turns to a string. push that to the db, then fswrite file puts that new object into the db and shows it
routes.post('/notes', (req, res) => {
    const newNote =
    {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    const db = JSON.parse(fs.readFileSync("db/db.json"))
    db.push(newNote)
    fs.writeFileSync("db/db.json", JSON.stringify(db))
// always have to respond back so that browser knows your done.
res.json(db);
});
module.exports = routes;