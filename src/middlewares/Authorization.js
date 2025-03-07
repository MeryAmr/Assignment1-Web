const express = require('express');

const authorizationMiddleWare = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log("Received Token:", token);
    if (token === 'Bearer ZEWAIL') {
      next();
    } else {
      res.status(404).send('Forbidden: Invalid Token, The TAs are severely disappointed');
    }
}
module.exports = authorizationMiddleWare;