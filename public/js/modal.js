

//모달팝업 
let modal = document.querySelector('#modal')
let modal_pop = document.getElementsByClassName('modal_pop');
// let modal_pop = document.querySelectorAll('.modal_pop');
let tabBox = document.querySelectorAll('.tabBox');
let closeBtn = document.querySelector('.close')
let modal_wrap = document.querySelector('.modal_wrap')


for(let i=0; i<tabBox.length; i++){
    tabBox[i].addEventListener('click', () => {
        // modal_pop[0].style.display = "block";
        modal_pop[0].classList.add('fadePop');
        document.body.style.overflow = "hidden";
        header.classList.add('active')
    })
    closeBtn.addEventListener('click', () =>{

        modal_pop[0].classList.remove('fadePop');
        document.body.style.overflow = "unset";
        header.classList.remove('active')
    })
    modal.addEventListener("cilck", () =>{
        modal_pop[0].classList.remove('fadePop');
    })
    //ESC 누르면 모달창 꺼지기
window.addEventListener("keyup", e => {
    if(e.key === "Escape") {
        modal_pop[0].classList.remove('fadePop')
        document.body.style.overflow = "unset";
        header.classList.remove('active')
    }
})
};






//모달창 버튼 누르면 수량 변경, 합계
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let cartNum = document.querySelector('#cartNum')
let amount = document.querySelector('#amount');
let amount2 = document.querySelector('#amount2');
let total2 = document.querySelector('#total2')
let totalC2 = document.querySelector('.total2')
// let amountV = 1;
let total = document.querySelector('#total')
let i=0;
let cost = 13000;

plus.addEventListener('click',()=>{
  if(i < 100){
    i++
    amount.textContent = i;
    amount2.textContent = i;

    let totalcostNum = i*cost;
    total.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });;
    total2.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });;
    totalC2.innerHTML  = '<span>TOTAL</span> <h4 class="total"> '+totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" }); +'</h4>';
  }
})
minus.addEventListener('click',()=>{
  if(i >1){
    i--;
    amount.textContent = i;
    let totalcostNum = i*cost;
    total.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });;
    total2.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });;
    totalC2.innerHTML  = '<span>TOTAL</span> <h4 class="total">'+ totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" }); +'</h4>';
  }
  
})



//좋아요, 카트 아이콘 변경
let addCart = document.querySelector('.modal_left_customer .addCart');
let like = document.querySelector('.modal_left_customer .like');
let cartNum2 = document.querySelector('#cartNum2')

addCart.addEventListener('click',()=>{
  addCart.classList.add('active');
  cartNum.textContent = i;
  cartNum2.textContent=i;
  cart_pop.classList.add('active')
})
like.addEventListener('click',()=>{
  like.classList.toggle('active');
})


//카트 사이드창

let closeBtn2 = document.querySelector('.close2');
let cart_pop = document.querySelector('.cart_pop');
let cart = document.querySelector('#cart');

let minus2 = document.querySelector('#minus2');
let plus2 = document.querySelector('#plus2');

// let amountV = 1;



cart.addEventListener('click',()=>{

  cart_pop.classList.add('active')
})

closeBtn2.addEventListener('click', () =>{

  cart_pop.classList.remove('active')
})
// let amountV = 1;

plus2.addEventListener('click',()=>{
  if(i < 100){
    i++
    amount2.textContent = i;
    let totalcostNum = i*cost;
    total2.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });
    totalC2.innerHTML  = '<span>TOTAL</span> <h4 class="total">'+ totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" }); +'</h4>';
  }
})
minus2.addEventListener('click',()=>{
  if(i >1){
    i--;
    amount2.textContent = i;
    let totalcostNum = i*cost;
    total2.textContent = totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });
    totalC2.innerHTML  = '<span>TOTAL</span> <h4 class="total"> '+ totalcostNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" });+'</h4>';
  }
  
})