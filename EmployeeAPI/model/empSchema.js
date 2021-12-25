const express = require("express");
const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    profession:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Employee", empSchema);
