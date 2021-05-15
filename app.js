

const express = require('express')

const cors = require('cors')
const connectDB = require('./config/db');
const Histories = require("./dbHistory")
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) =>{
    res.json({msg:"hello"});
});

app.get("/view/sync", (req, res) => {
    Histories.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

app.post("/view/new", (req, res) => {
    const dbHistory = req.body;


    Histories.create(dbHistory, (err, data) => {

    if(err){
        res.status(500).send(err);
    }else{
        res.status(201).send(data);
    }
});
});




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => res.send('Hello world!'));

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));