const data = [
    {
        name:'나를 소모하지 않는 현명한 태도에 관하여',
        author:['마티아스 뇔케','이미옥'],
        publisher:'퍼스트펭귄',
        date:'2024년 03월',
        price:17800,
        sale:'10% 할인',
        tag:['#얼리리더, #이달의굿즈, #나를바라보다, #인간관계에대하여']
    },{
        name:'하루 한 장 나의 어휘력을 위한 필사 노트',
        author:['호리코시 코헤이','이미옥'],
        publisher:'서울미디어코믹스(서울문화사)',
        date:'2024년 05월',
        price:21420,
        sale:'10% 할인',
        tag:['#얼리리더, #필사, #쓰는맛'],
    },{
        book:'불변의 법칙',
        author:['하우철','이수경'],
        publisher:'서삼독',
        date:'2024년 02월',
        price:22500,
        sale:'10% 할인',
        tag:['#얼리리더, #부자되는법, #부자만들기','돈좀벌어보자','돈모으고싶을때']
    }
]
const section = document.querySelector('section')
let book = '';
book += `<div class"book">`
//내용시작
book += `<h1>${data[1].name}</h1>`
book+=`<p class+"info"`
book += `%{data[1].author[0]}/${data[1].author[1]}역`
book += `<a href="#">${data[1].publishing}</a>`
book +=`<span>${data[1].date}</span>`
book += '</p>'
book += `<p class="price">`
book += `<em>${data[1].price}원</em>`
book += `<span>($data[1].sale)% 할인</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[1].tag[0]}${data[1].tag[1]}${data[1].tag[2]}${data[1].tag[3]}`
book += `</p>`
book += `</div>`
section.innerHTML = book
