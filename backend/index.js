const express = require("express")
const cors = require("cors")
const products = require("./product")
const app = express()

// middleware functions 
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("Welcome to our online shop api...")
})

app.get("/products", (req,res) => {
    res.send(products)
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listing on ${port} port`);
});