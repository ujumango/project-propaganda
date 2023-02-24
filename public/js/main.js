


//섹션 배경 바뀌면서 컨텐츠 변경

let listT = document.querySelectorAll('.section2 .tab_title>ul>li');
let tab_wrap = document.querySelector('.section2 .tab_wrap');
let tab_wrap2 = document.querySelector('.tab_wrap2');
let tabCont = document.querySelectorAll('.section2 .tabCont');


for(let i=0; i<listT.length; i++){
    listT[i].addEventListener('click', () =>{
        listT.forEach((e) =>{
            e.classList.remove('active');
            tabCont.forEach((e)=>{
                e.classList.remove('fadeCon');
            });
        })
        listT[i].classList.add('active');
        tabCont[i].classList.add('fadeCon');
    });

    listT[0].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#95bbc4'
    })
    listT[1].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#9cc4ae'
    })
    listT[2].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#FCE3B2'
    })
    listT[3].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#dfc6c6'
    })
    
}


let title_js = document.querySelectorAll('.section4 .title_js>ul>li');
let js_cont = document.querySelectorAll('.js_cont');

for(let j=0; j<title_js.length; j++){
    title_js[j].addEventListener('click', () =>{
        title_js.forEach((e) =>{
            e.classList.remove('active2');
            js_cont.forEach((e)=>{
                e.classList.remove('fadeCon2');
            });
        })
        title_js[j].classList.add('active2');
        js_cont[j].classList.add('fadeCon2');
    });

    title_js[0].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#F2F2F2'
    })
    title_js[1].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#E7E2D7'
    })
    title_js[2].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#D1D9E0'
    })
  
    
}



//header 테스트

let section5 = document.querySelector('.section5');

let header = document.querySelector('header')

let footer = document.querySelector('footer')



//서브페이지에서 헤더 색상 변경

// window.onload = function () {
//     headerC();

// };

// function headerC() {
//     if (location.pathname == '/') {
//         header.classList.remove('headerColor')
//     } else if (location.pathname != '/'){
//         header.classList.add('headerColor')
//     }
// }

if (location.pathname != '/') {
    console.log('안녕!')
    header.classList.add('headerColor')
} else if (location.pathname == '/'){
    console.log('잘가!')
    header.classList.remove('headerColor')
}

if (location.pathname == '/') {
    console.log('안녕!')
    footer.style.display = 'block'
} else if (location.pathname != '/'){
    console.log('잘가!')
    footer.style.display = 'none'
}



let sec5Top = section5.offsetTop;

console.log(section5)
console.log(sec5Top)
window.addEventListener('scroll', ()=>{
    let windowTop = window.scrollY;

    if(windowTop > sec5Top-80){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})







//섹션5 배경색+사진 바뀌는 파트

let sec5Title = document.querySelectorAll('.sec5Title');
let sec5_wrap = document.querySelector('.sec5_wrap');
let sec5cont = document.querySelectorAll('.sec5cont');

for(let i=0; i<sec5Title.length; i++){
    sec5Title[i].addEventListener('click',()=>{
        sec5Title.forEach((e)=>{
            e.classList.remove('active3');
            sec5cont.forEach((e)=>{
                e.classList.remove('active');
            });
        })
        sec5Title[i].classList.add('active3');
        sec5cont[i].classList.add('active');
    });

    sec5Title[0].addEventListener('click', ()=>{
        sec5_wrap.style.backgroundColor = '#F8D382'
    });
    sec5Title[1].addEventListener('click', ()=>{
        sec5_wrap.style.backgroundColor = '#D4CAC3'
    });
    sec5Title[2].addEventListener('click', ()=>{
        sec5_wrap.style.backgroundColor = '#AA2331'
    });
}



//date 출력하기
date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentDay = date.getDay();
const currentWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentMon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    


    document.getElementById('sec5Day').innerHTML = `${currentWeek[currentDay]}`;
    document.getElementById('sec5Date').innerHTML = `
    ${currentDate} ${currentMon[currentMonth]}`
    document.getElementById('sec5Year').innerHTML = `${currentYear}`;





