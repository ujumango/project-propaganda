const express = require('express');
const router = express.Router(); //R은 대문자! 대소문자 구분해야 함
const path =require('path');
const multer = require('multer');
const fs = require('fs');
// const db = require('./../db.js');


router.get('/', (req, res)=>{
  //필요한 데이터를 여기에 적어준다.
  // res.send(html);
    res.render('main')
});


const upload = multer({
  storage:multer.diskStorage({
    destination(req,file,done){
      done(null, 'public/uploads/');
    },
    filename(req,file,done){
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext)+ Date.now() + ext);
    }
  }),

  limits:{fileSize:1024*1024*10}
});


router.get('/bookwrite', (req, res)=>{
  res.render('book_write');
 });















//login
router.get('/login', (req, res)=>{
 res.render('login');
});




router.post('/writejoin',(req, res) =>{
  let paramJoin = JSON.parse(JSON.stringify(req.body));

  let name = paramJoin['name'];
  let adress = paramJoin['adress'];
  let birth = paramJoin['birth']
  let id = paramJoin['id'];
  let pw = paramJoin['pw'];
  let repw = paramJoin['repw'];
  console.log(name);
  console.log(adress);
  console.log(birth);
  console.log(id);
  console.log(pw);
  console.log(repw);
})

router.get('/join',(req, res)=>{
  res.render('join');
})






module.exports = router;

