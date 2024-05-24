//지역변수와 전역변수
//스코프(함수 접근 위치)
//지역스코프, 전역스코프
let b = 20;
let c = 30;
function test(){
    //함수의 블록 스코프(지역변수) 위치
    let a = 10;
    console.log(a+b) //10+20 = 30
}
test()
/* console.log(a)//error
console.log(a+b)//error(지역변수를 전역위치에서 사용하기 때문에 에러남) */
console.log(b+c) //50
//----------------------
//q.함수 스코프와 호출 위치를 활용해서 6,16 결과 문제풀기
/* let x = 1;
function func1(){
    y = 5;
    console.log(x+y)//목표값 6
}
function func2(){
    let z = 10;
    console.log(x+y+z)//목표값 16
} */
//전역스코프
/* func2() *///NaN == Not a Number (1+undefined+10)
//자판기 함수(매개변수==파라미터 연습)
//매개변수가 없는 japangi1 함수
//콜라, 사이다 판매 자판기
/* function japangi1(){//콜라 버튼 클릭 함수
    console.log('콜라1개출력')
} */
const japangi1 = () => {
    console.log('콜라1개 출력')
}
function japangi2(){
    console.log('사이다1개출력')
}
japangi1()
japangi1()
japangi2()
//매개변수가 있는 함수 만들기
//1. funtion japangi3(drink) -> drink매개변수 생성
//2. japangi3('콜라')->함수호출 시 매개변수에 대입값 작성('콜라'가 drink 매개변수에 대입됨)
//3. console.log(drink) -> 매개변수에 대입된 값이 함수 내에 실행코드에 전달됨.
function japangi3(drink){
    console.log(drink+'1개 출력')
}
//함수 호출 시 매개변수에 대입하는 값을 괄호안에 작성함.
japangi3('콜라')
japangi3('사이다')
japangi3('탄산수')
//매개변수 2개 이상 필요한 경우
//함수 내에 수정 데이터 == 매개변수(파라미터)
function japangi4(drink, num){
    console.log(`${drink} ${num}개 주문완료`)
}
japangi1('콜라',3)//argument
japangi4('사이다',2)

function kiosk1(coffee){
    console.log(coffee)
}
kiosk1('아메리카노')
kiosk1('카페라떼')
kiosk1('모카라떼')
function kiosk1(coffee,num){
    console.log(`${coffee} ${num}잔 주문하기`)
}
kiosk1('아메리카노',2)
kiosk1('카페라떼',1)
kiosk1('모카라떼',3)
