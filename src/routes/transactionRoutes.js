/* const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const collection = require("../models/Transaction");
const Transaction = mongoose.model("Transaction");

router.get("/", async(req, res) => {
    const transaction = await Transaction.find();

    res.send(transaction)
})

router.post("/transaction", async (req, res) => {
    const data = { Id, Tanggal, Keterangan, Nominal, Kategori } = req.body;
    const transaction = new Transaction({ Id, Tanggal, Keterangan, Nominal, Kategori });
    const transactiondata = await collection.insertMany(data);
    console.log(transactiondata);
});

*/