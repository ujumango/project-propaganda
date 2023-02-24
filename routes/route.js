const express = require('express');
const router = express.Router(); //R은 대문자! 대소문자 구분해야 함
const multer = require('multer');
const fs = require('fs');
const path =require('path');
const db = require('./../db.js');


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




 router.post('/bookW',upload.single('book_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let title = param ['book_title'];
  let writer = param ['book_writer'];
  let price = param ['book_price'];
  let info = param ['book_txt'];
  let titleinfo = param ['book_titleinfo'];
  db.insertBook(img,title,writer,price,info,titleinfo, ()=>{
    res.redirect('/booklist')

  })
});

router.get('/booklist', (req, res)=>{
  db.getBook((rows)=>{
    res.render('book_list',{rows:rows});
  })

 });

router.get('/bookBtn',(req,res)=>{
  let id = req.query.id;
  console.log(id);

  db.getBookbyId(id,(row) => {
    res.render('book_update',{row:row[0]})
  })
});

router.post('/updateBook', upload.single('book_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let title = param ['book_title'];
  let writer = param ['book_writer'];
  let price = param ['book_price'];
  let info = param ['book_txt'];
  let titleinfo = param ['book_titleinfo'];
  let id = param['id'];

  db.updateBook(id,img,title,writer,price,info,titleinfo, ()=>{
    res.redirect('/booklist');
  })
});

router.get('/deleteB',(req,res) =>{
  let id = req.query.id;
  db.deletePbyId(id,()=>{
    res.redirect('/booklist')
  })
});



router.get('/bookviewer', (req, res)=>{
   let id = req.query.id;
   db.getBookbyId(id, (row) =>{
    res.render('book_viewer',{row:row[0]})
   })

 });













//login


router.get('/join',(req, res)=>{
  res.render('join');
})



router.post('/writejoin',(req, res) =>{
  let paramJoin = JSON.parse(JSON.stringify(req.body));

  let name = paramJoin['name'];
  let birth = paramJoin['birth']
  let id = paramJoin['id'];
  let email = paramJoin['email'];
  let pw = paramJoin['pw'];
  let repw = paramJoin['repw'];
  console.log(name);

  db.memberJoin(name, birth, email, id, pw, ()=>{
    // res.redirect('/');
    res.send(`<script>alert("${name}님! 회원가입이 완료되었습니다!"); document.location.href="/";</script>`)
    })
})

router.get('/login', (req, res)=>{
  res.render('login');
 });

 router.post('/loginre', (req, res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['user_id'];
  let pw = param['user_pw'];

  db.loginCheck(id,pw, (results)=>{
    if(results.length>0) {
      // res.redirect('/')
      res.send(`<script>alert("${name}님! 환영합니다!"); document.location.href="/";</script>`)

    }else{
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>`)
    }
  });
})




module.exports = router;

