var box1;//변수 생성은 됐으나 데이터는 정의되지 않은 상태
console.log(box1) // undefined
var box1 = 1; //중복 선언해도 에러는 나지 않는다.
box_all() //변수가 없어도 undefined가 출력된다.
var box2 = "box1" + 1;
box_all()//box3 선언전
var box3 = "1"+(1+1);
box_all()
console.log(box1); //1
console.log(box2); //box11? 2? 
console.log(box3);
box_all()
//===================================================
function box_all(){
    console.log("all=>","과", box1, box2, box3);
    //템플릿 문자열(ES6)
    console.log(`all=>${box1}과${box2}와${box3}입니다.`)
    console.log(`all=>${box1, box2, box3}`)
}
//====================회원의 나이를 저장하고 있는 함수==================
var lee = 20
var kim = 21
var soo = 22
function user_age(){
    console.log(`당신의 나이는 ${soo}살 입니다.`)
}
//=============================상품 수량 증가 함수
var num = 0;// 기본 수량
function productNum(){
    num = num+1
    console.log(num)
}
console.log('--------------------------------------------------------')
//var vs let
var a = 1; //초기 생성
var a = 2; //이미 생성한 변수를 중복 선언해도 에러 없음
let b = 3;
b = 4; //이미 생성한 변수를 중복 선언하면 에러발생
//let 변하는 변수 vs const 변하지 않는 상수(undefined X)
const c = 5;
//자바스크립트는 절차적언어이다.
//자바스크립트는 객체지향언어이다.
//자바스크립트는 함수형언어이다.
const js = "자바스크립트";
let js_lang ="절차적";
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang = "객체지향";
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang = "함수형";
console.log(`${js}는 ${js_lang}언어이다.`)
console.log('--------------------------------------------------------')
//const는 변하지 않는 상수를 가지는 변수이다.
//let은 변하는 데이터 값을 가지는 변수이다.
//var는 변하는 데이터 값을 가지는 변수이다.
const have = "변수";
let abd = "변하지 않는";
let data = "const"
console.log(`${data}는 ${abd} 상수를 가지는 ${have}이다.`)
date = "let"
abd = "변하는 데이터 값을"
console.log(`${data}는 ${abd} 가지는 ${have}이다.`)
date = "var"
abd = "변하는 데이터 값을"
console.log(`${data}는 ${abd} 가지는 ${have}이다.`) 
console.log('--------------------------------------------------------')
//회원 정보 저장 변수
//이름 : 홍길동
//나이 : 20
//혈핵형 : o
//mbti : enfj
//거주지 : 인천시 부평구
//성별 : 남성
let que = "이름"
let answer = "홍길동"
console.log(`${que} : ${answer}`)
que = "나이"
answer = 20
console.log(`${que} : ${answer}`)
const blood = "혈핵형"
answer = "o"
console.log(`${blood} : ${answer}`)
que = "mbti"
answer = "enfj"
console.log(`${que} : ${answer}`)
que = "거주지"
answer = "인천시 부평구"
console.log(`${que} : ${answer}`)
que = "성별"
answer = "남성"
console.log(`${que} : ${answer}`)
console.log('--------------------------------------------------------')
let global_variable = 1;
function local_func(){
    let local_variable = 2;
    console.log(local_variable)
}
console.log(global_variable)
local_func()
console.log('--------------------------------------------------------')
//null(비어있는, 삭제된) vs undefined(정의안됨)
let cart1 = 10; //장바구니 10개 상품
console.log(cart1);
cart1 = null;//장바구니 비움
console.log(cart1);
let cart2;
console.log(cart2); //undefined
console.log('--------------------------------------------------------')
//하루 총 지출액 가계부 만들기
//커피 1500원, 도시락 6000원, 대중교통 2천원
//오늘 총 지출액은 000원 입니다.
let coffee = 1500;
let rice = 6000;
let public = 2000;
let phone = 2000000;
function see(){
    let result = coffee+rice+public
    console.log(`오늘 총 지출액은${result}원입니다.`)
}
function see2(){
    let result = phone/6
    console.log(`핸드폰 6개월 할부금액은 ${result}원 입니다`)
}
function see3(){
    let result = coffee+rice+public;
    let plan = phone/6
    let total = result + plan
    console.log(`할부 포함 총 지출액은${total}원입니다.`)
}

