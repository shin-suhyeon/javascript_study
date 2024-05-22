//1. sub숨기기 <ul class="sub">*3
//2. gnb 마우스를 올리면 <ul class="gnb"><li> *3
//3. snb 3개가 모두 출력 <ul class="sub">*3
//동적 절차 체크 후 html 태그 확인 후
//html dom 필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
console.log(sub,gnb)
//1. sub 숨기기 style=dispaly:none;
sub[0].style.display = 'none'
sub[1].style.display = 'none'
sub[2].style.display = 'none'
//2. gnb에 마우스를 올리면
gnb[0].addEventListener('mouseover',subShow)
gnb[0].addEventListener('mouseover',subHide)
gnb[1].addEventListener('mouseover',subShow)
gnb[1].addEventListener('mouseover',subHide)
gnb[2].addEventListener('mouseover',subShow)
gnb[2].addEventListener('mouseover',subHide)
function subShow(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}
function subHide(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}
