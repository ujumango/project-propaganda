let app = require('../app') //이 파일도 같이 요청해서 실행해줘

let PORT = process.env.PORT || 3000;


//../app파일 요청했으니까 listen 해줘야 함
// app.listen(port, ()=>{
//   console.log(`${port}로 express 실행`)
// })

app.listen(PORT, () => {
    console.log(`express 실행 ${PORT}`);
})
//포트 3000

