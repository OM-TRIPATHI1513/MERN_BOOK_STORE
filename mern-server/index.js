const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const mongoose = require('mongoose');



// Middlewre
app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
  res.send('Hello World!')
})







const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://risabht043:Skt230144@cluster0.p6qwqok.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

  const booksCollections  = client.db("bookInventory").collection("books"); 



// Post the books

  app.post("/upload-book", async(req,res) => {
    const data = req.body;
    const result = await booksCollections.insertOne(data);
    res.send(result);
  })


  //Get the books

  // app.get("/all-books", async(req,res) => {
  //   const boooks = booksCollections.find();
  //   const result  = await boooks.toArray();
  //   res.send(result);
  // })


  // update book data 

  app.patch("/book/:id", async (req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = {_id: new ObjectId(id)};
    const options = { upsert: true};
    const updateDoc = {
      $set: {
         ...updateBookData
      }
    }
    const result = await booksCollections.updateOne(filter, updateDoc, options);
    res.send(result);
  })



  // Delete book data
  app.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await booksCollections.deleteOne(filter);
    res.send(result);
  })


  // find by category filter
  app.get("/all-books", async(req,res) => {
    let query = {};
    if(req.query?.category){
      query = {category: req.query.category}
    }
  const result = await booksCollections.find(query).toArray();
  res.send(result);
  }) 

  // Get Boook Detail by his id
  app.get("/book/:id", async(req,res) => {
    const id = req.params.id;
    const result = await booksCollections.findOne({_id: new ObjectId(id)});
    res.send(result);
  })



  //********************************************************************************************************************* */


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})