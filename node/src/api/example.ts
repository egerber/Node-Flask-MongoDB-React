var express = require('express');
var router = express.Router();

router.get('/test', async function(req:any, res:any) {
  console.log("hier22");
    res.send({message:'hello world24'}, req, res);
  });

module.exports = router;