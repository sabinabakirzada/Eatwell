const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 8080;
const { Schema } = mongoose;
const productsSchema = new Schema({
  productName: { type: String, require: true },
  price: { type: Number, require: true },
  imgUrl: { type: String, require: true },
  description: { type: String, require: true },
});
const Products = mongoose.model("Products", productsSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = new Products(req.body);
    product.save();
    res.status(201).send({ message: "Success", data: product });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findByIdAndDelete(id);
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(product);
    console.log("sdjkfjk");
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
mongoose
  .connect(
    "mongodb+srv://SabinaBakirzada:1234567S@cluster0.oryn6ku.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  });
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
