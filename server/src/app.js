const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const tokenRouter = require('./routers/tokenRouter')
const authRouter = require('./routers/auth.Router')

const morgan = require('morgan');
const path = require('path')


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);

module.exports = app;