const mas = ['Маша',"Саша","Паша","Гена","Вова"]

function clTop() {
   const elem = document.getElementById('elem')
   const clOut = document.getElementById('clGran')
   clOut.innerHTML = 'Толщина верхней границы: ' + elem.clientTop
}

function clLeft() {
   const elem = document.getElementById('elem')
   const clOut = document.getElementById('clGran')
   clOut.innerHTML = 'Толщина левой границы: ' + elem.clientLeft
}

function razmTop() {
   const elem = document.getElementById('elem1')
   const clOut = document.getElementById('clRazm')
   clOut.innerHTML = 'Полная высота: ' + elem.offsetHeight
}

function razmLeft() {
   const elem = document.getElementById('elem1')
   const clOut = document.getElementById('clRazm')
   clOut.innerHTML = 'Полная ширина: ' + elem.offsetWidth
}

function razmTopIn() {
   const elem = document.getElementById('elem2')
   const clOut = document.getElementById('clRazmIn')
   clOut.innerHTML = 'Высота с отступами: ' + elem.clientHeight
}

function razmLeftIn() {
   const elem = document.getElementById('elem2')
   const clOut = document.getElementById('clRazmIn')
   clOut.innerHTML = 'Ширина с отступами: ' + elem.clientWidth
}

function razmAll() {
   const elem = document.getElementById('elem3')
   const style = getComputedStyle(elem)
   const razmOut = document.getElementById('razmAll')
   razmOut.innerHTML = 'Ширина: ' + style.width + '<br>' + 'Высота: ' + style.height
}

function krutTop() {
   const elem = document.getElementById('elem4')
   const krutTop = document.getElementById('krutTop')
   krutTop.innerHTML = 'Прокрутка сверху: ' + elem.scrollTop
}

function krutLeft() {
   const elem = document.getElementById('elem5')
   const krutLeft = document.getElementById('krutLeft')
   krutLeft.innerHTML = 'Прокрутка слева: ' + elem.scrollLeft
}

function prokrut() {
   const elem = document.getElementById('elem6')
 //  const krutLeft = document.getElementById('krutLeft')
 //  krutLeft.innerHTML = 'Прокрутка слева: ' + elem.scrollLeft
   elem.scrollTop = 100
}

function prokrutPlus() {
   const elem = document.getElementById('elem7')
   const krut100 = document.getElementById('krut100')
   elem.scrollTop += 100
   krut100.innerHTML = 'Прокрутка сверху: ' + elem.scrollTop
}

function prokrutHeight() {
   const elem = document.getElementById('elem8')
   const prokrutHeight = document.getElementById('prokrutHeight')
   const height = elem.scrollHeight
   prokrutHeight.innerHTML = 'Высота элемента с учетом прокрутки: ' + height
}

function prokrutWidth() {
   const elem = document.getElementById('elem9')
   const prokrutHeight = document.getElementById('prokrutWidth')
   const width = elem.scrollWidth
   prokrutHeight.innerHTML = 'Высота элемента с учетом прокрутки: ' + width
}

function ustHeight() {
   const elem = document.getElementById('elem10')
   let height = elem.scrollHeight
   height = height - 300
   elem.scrollTop = height
   document.getElementById('ustHeight').innerHTML = 'Прокрутка: ' + height
}

function yBody() {
   const height = window.pageYOffset
   const out = document.getElementById('yBody')
   out.innerHTML = 'Прокрутка сверху: ' + height
}

function xBody() {
   const width = window.pageXOffset
   const out = document.getElementById('xBody')
   out.innerHTML = 'Прокрутка слева: ' + width
}

function toBody() {
   scrollTo(300,500)
}

function prokrBody() {
   scrollBy(0,300)
   const out = document.getElementById('prokrBody')
   out.innerHTML = 'Прокрутка страницы сверху: ' + window.pageYOffset
}

function prokrNis() {
   scrollTo(0,document.body.clientHeight)//clientHeight)
}

function prokrBody1() {
   scrollBy(0,400)
   const out = document.getElementById('prokrBody1')
   out.innerHTML = 'Прокрутка страницы сверху: ' + window.pageYOffset
}

function prokrVar() {
   let height
   if (document.body.scrollHeight - document.body.scrollTop == document.body.clientHeight) {
      scrollTo(0,100)
   }
   const out = document.getElementById('prokrVar')
   out.innerHTML = 'Прокрутка страницы сверху: ' + document.body.scrollHeight + document.body.clientHeight//window.pageYOffset
}

function uvel() {
   const elem = document.getElementById('elem20')
   const styleElem = getComputedStyle(elem1)
   let height = styleElem.height
   let width = styleElem.width
 //  elem.style.width = '300px'//elem.style.width * 2
   const out = document.getElementById('uvel')
   out.innerHTML = 'Размер: ' + styleElem.width//width + height
   styleElem.width = styleElem.width * 2 +'px'
}

function rasmBr() {
   const rasm = document.documentElement.clientHeight
   const out = document.getElementById('rasmBr')
   out.innerHTML = 'Высота окна браузера: ' + rasm
}

function strNis() {
   const height = document.body.clientHeight
   window.scrollTo(0,height)
   const out = document.getElementById('strNis')
   out.innerHTML = window.pageYOffset
}

function vertPr() {
   let a
   if (document.body.style.overflow == 'vertPr') {
      a = 'Вертикальной прокрутки нет'
   } else {
      a = 'Вертикальная прокрутка есть'
   }
   const out = document.getElementById('vertPr')
   out.innerHTML = a
}

function primer()
{
 //   var name = document.getElementById("fullName").value;
    document.getElementById("feedBack").innerHTML = 9
 //   mas.push(name)
//    document.getElementById("fullName").value = ''
//    for (let i=0; i<mas.length; i++) {
//        document.getElementById("feedBack").innerHTML = document.getElementById("feedBack").innerHTML+    '<br/>\n'+mas[i]
  
//   }
}

