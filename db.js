var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.cbqest5qkykx.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : 'yujoo1020',
  database : 'propa',
  multipleStatements : true //다중쿼리용 설정 -> 테이블 여러개 조회 가능
});
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});



function memberJoin (name, birth, email, id, pw, callback){
    connection.query(`INSERT INTO propajoin (create_time, email, name, birth, id, pw) values (NOW(),'${email}','${name}','${birth}','${id}','${pw}')`, (err) =>{
        if (err) throw err;
        callback();
    })
}

function loginCheck(id, pw, callback){
    connection.query(`SELECT * FROM propajoin WHERE id='${id}' and pw='${pw}'`, (err, results)=>{
        if(err) throw err;
        callback(results);
    })
}

function insertBook(img,title,writer,price,info,titleinfo, callback){
    connection.query(`INSERT INTO propabook(create_time,img,title,writer,price,info,titleinfo) VALUES (NOW(), '${img}', '${title}', '${writer}', '${price}', '${info}', '${titleinfo}')`,
    (err) => {
        if(err) throw err;
        callback();
    })
}

function getBook(callback){
    connection.query('SELECT * FROM propabook ORDER BY id desc', (err,rows,fields)=>{
        if(err) throw err;
        callback(rows);
    })
}


function getBookbyId (id, callback){
    connection.query(`SELECT * FROM propabook WHERE id = ${id}`, (err,row)=>{
        if(err) throw err;
        callback(row);
    })
}

function updateBook(id,img,title,writer,price,info,titleinfo, callback){
    connection.query(`UPDATE propabook SET create_time=NOW(),img='${img}', title='${title}',writer='${writer}',price='${price}', info='${info}', titleinfo='${titleinfo}' WHERE id=${id}`, (err)=>{
        if(err) throw err;
        callback();
    })
}

function deletePbyId (id, callback){
    connection.query(`DELETE FROM propabook WHERE id=${id}`,(err) => {
        if(err) throw err;
        callback();
    })
}

module.exports = {
    memberJoin,loginCheck,
    insertBook,getBook,
    getBookbyId,updateBook,
    deletePbyId
}