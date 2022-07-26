const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fqudgbl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

    }
    finally{
        
    }

}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello from doctor uncle')
})

app.listen(port, () => {
  console.log(`Doctors App listening on port ${port}`)
})