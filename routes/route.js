const express = require('express');
const router = express.Router(); //R은 대문자! 대소문자 구분해야 함
const path =require('path');
const multer = require('multer');
const fs = require('fs');
// const db = require('./../db.js');


const html = `<!doctype html>
  <html>
  <head>
  <title>Node HTML</title>
  </head>
  <body>
  <h1>hello</h1>
  <form action='/name' method='POST'>
  <input type='text' name='name' placehorder='이름'>
  <button>확인</button>
  </form>
  </boby>
  </html>
`
router.get('/', (req, res)=>{
  //필요한 데이터를 여기에 적어준다.
  // res.send(html);
    res.render('main')
});


//페이지 연결
router.get('/sub1', (req, res)=>{
 res.render('sub1');
 //페이지를 불러올 때 쓰는 것 render
});




// router.post('/writejoin',(req, res) =>{
//   let paramJoin = JSON.parse(JSON.stringify(req.body));

//   let name = paramJoin['name'];
//   let adress = paramJoin['adress'];
//   let birth = paramJoin['birth']
//   let id = paramJoin['id'];
//   let pw = paramJoin['pw'];
//   let repw = paramJoin['repw'];
//   console.log(name);
//   console.log(adress);
//   console.log(birth);
//   console.log(id);
//   console.log(pw);
//   console.log(repw);
// })

// router.get('/join',(req, res)=>{
//   res.render('join');
// })






module.exports = router;

