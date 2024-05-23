//childNode, children(n) == 부모 : nth-child(n)
// firstChild, firstElementChild== first-child, last-child
const nav = document.querySelector('nav')
console.log(nav)
console.log(nav.firstChild)
console.log(nav.firstElementChild)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild)
console.log(nav.lastElementChild.innerText)
//형제관계 (+)
//js 이전, 다음 형제 모두 처리 가능
//nextSibling 공백 포함 다음 형제 속성
//nextElementSibling 다음 형제 요소만 인식 속성
//previousSibling 공백포함 이전 형제 속성
//previousElementSibling 이전 형제 요소만 인식 속성
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
//Q. 메뉴2의 이전형제 메뉴 1을 선택해서 배경색 노랑 변경
nav_a[1].previousElementSibling.style.backgroundColor = "yellow"
//Q. 메뉴2의 다음형제 메뉴4를 선택해서 배경색 aqua 변경
nav_a[1].nextElementSibling.nextElementSibling.style.backgroundColor = "aqua"
