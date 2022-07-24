const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

const apiRoutes = require('./routes/routes');
app.use('/api', apiRoutes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>  console.log("app listening at http://localhost:3001"));