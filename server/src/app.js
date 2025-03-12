const express = require('express');
const morgan = require('morgan');
const path = require('path')

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;