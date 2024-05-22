// 부모 parentNode, parentElement 속성
const nav_a_all = document.querySelectorAll('nav a')
const nav_a = document.querySelector('nav a')
console.log(nav_a_all)//Node List 배열로 a 2개 인식
console.log(nav_a)//태그 상 먼저 시작 대상 기준 a
console.log(nav_a_all[0].parentNode)
console.log(nav_a_all[1].parentNode)
console.log(nav_a.parentNode)
//객체.속성
//객체.속성.속성
console.log/(nav_a.parentNode.parentNode)//header
//객체.속성.속성.속성 = '배경색(값)'
nav_a.parentNode.style.backgroundColor = "yellow"
nav_a_all[0].parentNode.parentNode.style.backgroundColor="#f0c"
nav_a.parentElement.style.border = "2px solid red";
nav_a.parentNode.parentNode.style.width = '700px';
nav_a.parentNode.parentNode.style.height = '100px';
nav_a.parentNode.parentNode.style.backgroundImage = 'url(./img/logo.jpg)';
nav_a_all[1].addEventListener('mouseover',function(){
    nav_a_all[1].parentNode.style.borderBottom = '5px solid red'
})
nav_a_all[1].addEventListener('mouseout',function(){
    nav_a_all[1].parentNode.style.border = '0'
})
//자식,자손잡기 childNodes, children
const header =document.querySelector('header')
const headerChild = header.childNodes;
const headerChild2 = header.children;
console.log(header)
console.log(headerChild)
console.log(headerChild[1])
console.log(headerChild[3])
headerChild[1].style.backgroundColor = 'yellow'
console.log(headerChild2)
console.log(headerChild2[0])
console.log(headerChild2[1])
console.log(headerChild2[0].children[0])
//(위) 추가 속성 및 메서드를 연결해서 다양한 기능 수행
//headerChild2[0].children[0].style (o)
//headerChild2[0].children[0].addEventListener()(o)
console.log(headerChild2[0].innerHTML)
console.log(headerChild2[0].innerText)
//(위) 단순 읽기, 변경 단순 수행
//headerChild2[0].innerHTML.style(x)
//headerChild2[0].innerHRML.addEventListener() (x)
