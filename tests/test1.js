const multi_hashing = require("../")

var buf = Buffer.alloc(122);
var res = multi_hashing.m7(buf);

console.log(res.toString('hex'));