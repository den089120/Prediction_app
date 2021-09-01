// class Template {
//
//    navHome() {
//       return`
//       <div class="container">
//          <h1 class="text-center mt-4">Книга Перемен</h1>
//          <div class="text-center mt-4">древнекитайский философский трактат, предназначенный для гадания.</div>
//          <div class="d-flex flex-row justify-content-center m-4">
//             <button class="p-1 btn btn-secondary" data-id="start">Начать гадание</button>
//          </div>
//       </div>
//       `
//    }
//
//    navHome2() {
//       return`
//       <div class="container">
//          <h1 class="text-center mt-4">Книга Перемен</h1>
//          <div class="text-center mt-4">древнекитайский философский трактат, предназначенный для гадания.</div>
//          <div class="d-flex flex-row justify-content-center m-4">
//             <button class="p-1 btn btn-secondary me-1" data-id="start_create">Генерация гексаграммы</button>
//             <button class="p-1 btn btn-secondary" data-id="start_select">Выбрать из таблицы</button>
//          </div>
//       </div>
//       `
//    }
//
//    navReg() {
//       return `
//       <form>
//         <div class="mb-3">
//             <label for="exampleInputFullName" class="form-label">Full Name</label>
//             <input type="email" class="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp">
//             <div id="fullNameHelp" class="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">Email address</label>
//             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">Password</label>
//             <input type="password" class="form-control" id="exampleInputPassword1">
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputPassword2" class="form-label">Password</label>
//             <input type="password" class="form-control" id="exampleInputPassword2">
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//       </form>
//       `
//    }
//
//    navLogin() {
//       return `
//       <form>
//         <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">Email address</label>
//             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">Password</label>
//             <input type="password" class="form-control" id="exampleInputPassword1">
//         </div>
//         <div class="mb-3 form-check">
//             <input type="checkbox" class="form-check-input" id="exampleCheck1">
//             <label class="form-check-label" for="exampleCheck1">Check me out</label>
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//       </form>
//       `
//    }
// }
//
// class Store {
//    constructor() {
//       this.key = 'Prediction_app'
//    }
//
//    setStore(obj) {
//       let c = this.getStore()
//       let d = new Date()
//       let a = (c === null) ? {} : c
//       a[d.toString()] = obj
//       localStorage.setItem( this.key,  JSON.stringify(a))
//    }
//
//    getStore() {
//       return JSON.parse(localStorage.getItem(this.key))
//    }
// }
//
// class drawCanvas {
//    constructor(id) {
//       this.parentNode = id !== null ? document.body.querySelector(`${id}`) : id
//    }
//
//    draw_1() {
//       let node = document.createElement('div')
//       node.classList.add('d-flex', 'p-1')
//       // node1.setAttribute('style', 'width: 40px; height: 10px ')
//       node.innerHTML = `<div class="btn btn-primary p-1" style="width: 95px; height: 10px"></div>`
//       this.parentNode.append(node)
//    }
//
//    draw_0() {
//       let a = document.createElement('div')
//       a.classList.add('d-flex', 'justify-content-between', 'p-1')
//       a.innerHTML = `<div class="btn btn-primary p-1" style="width: 40px;height: 10px"></div>
//                      <div class="btn btn-primary p-1" style="width: 40px;height: 10px"></div>`
//       this.parentNode.append(a)
//    }
//    draw_1_im(bin = null) {
//       return `<div class="d-flex p-1">
//                  <div class="btn btn-primary p-1" style="width: 95px; height: 10px"></div>
//               </div>`
//    }
//
//    draw_0_im(bin = null) {
//       return `<div class="d-flex justify-content-between p-1">
//                   <div class="btn btn-primary p-1" style="width: 40px; height: 10px"></div>
//                   <div class="btn btn-primary p-1" style="width: 40px; height: 10px"></div>
//               </div>`
//    }
//    clear() {
//       this.parentNode.innerHTML = ''
//    }
// }
//
// class Prediction {
//
//
//    templateCard() {
//       return `
//          <div class="card me-auto p-2" style="width: 20rem;">
//              <div class="m-auto" id="canvas" style="width:100px;height:114px"></div>
//              <div class="card-body">
//                 <h5 class="card-title text-center" data-id="nameCard">Название гексаграммы</h5>
//                 <div class="text-center">
//                     <button class="btn btn-primary m-auto" data-id="createCanvas">Нажмите для генерации</button>
//                 </div>
//                 <p class="card-text" data-id="descCard">Описание гексаграммы</p>
//              </div>
//          </div>
//       `
//    }
//    templateBody(arrVal, arrKey) {
//       return `
//       <div class="d-flex  mb-3" data-id="card_create">
//          ${this.templateCard()}
//          <div class="">
//             <div class="text-center p-1">История предсказаний.</div>
//             <div class="p-2 d-flex flex-column" style="" data-id="stores">
//                 ${this.renderStore(arrVal, arrKey)}
//             </div>
//          </div>
//       </div>
//       `
//    }
//
//    templateCardStore(bin, key) {
//       let date = key.split(' ').slice(2, 5).join(' ')
//       return `
//         <div class="card d-flex flex-row justify-content-around" style="width: 22rem;">
//            <div class="" style="width:100px;height:114px">${createImg(bin)}</div>
//            <div class="d-flex flex-column">
//                 <h5 class="card-title text-center">Дата и время</h5>
//                 <h5 class="card-title text-center">${date}</h5>
//                 <button type="button" class="btn btn-secondary btn-sm" data-id="details" data-type="${bin}">Подробнее...</button>
//            </div>
//         </div>
//       `
//    }
//    renderStore(arrVal, arrKey) {
//       if (arrVal === null)
//          return `
//          <div class="text-center">
//             У вас еще нет записей о предыдущем гадании
//          </div>
//          `
//       else {
//          let ar = []
//          for (let i=0; i < arrVal.length; i++) {
//             ar.push(this.templateCardStore(arrVal[i], arrKey[i]))
//          }
//          return ar.join('')
//       }
//    }
// }
//
// class PredictionTable {
//    constructor() {
//       this.SIZE_ROW = 8
//       this.SIZE_COL = 8
//    }
//
//    createCell(bin) {
//       return `
//       <td data-type="${bin}" data-id="popup_open">
//         <div class="m-auto" style="width:100px;height:134px;z-index: 5" data-type="${bin}" data-id="popup_open">
//             ${createImg(bin)}
//             <div class="d-flex" data-type="${bin}" data-id="popup_open">
//                <div class="btn btn-secondary btn-sm p-0"
//                     style="width: 100px; height: 20px; padding: 2px"
//                     data-type="${bin}" data-id="popup_open">
//                   Выбрать
//                </div>
//             </div>
//         </div>
//       </td>
//       `
//    }
//    createRow(bin) {
//       let row = []
//       for (let i = 0; i < this.SIZE_ROW; i++) {
//          row.push(this.createCell(bin[i]))
//       }
//       return `<tr>${row.join('')}</tr>`
//    }
//    createTable() {
//       let imgS = Object.keys(imgNum)
//       let row = []
//       let c = 0
//       for (let i = 0; i < this.SIZE_ROW; i++) {
//
//          let ar = []
//          for (let j = 0; j < this.SIZE_COL; j++) {
//             ar.push(imgS[c + j])
//          }
//          row.push(ar)
//          c = c + this.SIZE_COL
//       }
//       let col = []
//       for (let i = 0; i < this.SIZE_COL; i++) {
//          col.push(this.createRow(row[i]))
//       }
//       return `
//         <table class="table table-borderless table-sm caption-top">
//            <caption class="text-center">Таблица гексаграмм</caption>
//            <thead>
//               <tr>
//               </tr>
//            </thead>
//            <tbody>
//               ${col.join('')}
//            </tbody>
//         </table>
//       `
//    }
// }
//
// class ModalWindow {
//
//    createModal(bin) {
//       return `
//       <div class="popup_close btn" data-id="popup_close">Закрыть</div>
//       <div class="popup_img">${createImg(bin)}</div>
//       <div class="popup_title">${imgNum[bin]}</div>
//       <div class="popup_text">${imgDesc[bin]}</div>
//       `
//    }
// }

function createImg(bin, node = null) {
   let s = new drawCanvas(node)
   let arr = bin.split('')
   let b = []
   for (let i=0; i<arr.length; i++) {
      if (arr[i] === '0') b.push(s.draw_0_im(bin))
      else b.push(s.draw_1_im(bin))
   }
   return b.join('')
}

const body = document.body.querySelector('#createBody')
const popupContent = document.body.querySelector('[data-id="popup_content"]')
const popupBody = document.body.querySelector('#popup')
const navList = document.body.querySelectorAll('.nav-link')

const stores = new Store()
const nav = new Template()
const pred = new Prediction()
const table = new PredictionTable()
const popup = new ModalWindow()

let count = 1
let bin = []
body.innerHTML = nav.navHome()

document.body.addEventListener('click', (e)=> {
   const dataId = e.target.dataset.id
   switch (dataId) {
      case 'Home':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         body.innerHTML = nav.navHome()
         break;
      case 'registration':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         body.innerHTML = nav.navReg()
         break;
      case 'start_create':
         let arrVal = stores.getStore() !== null ? Object.values(stores.getStore()) : null
         let arrKey = stores.getStore() !== null ? Object.keys(stores.getStore()) : null
         body.innerHTML = pred.templateBody(arrVal, arrKey)
         break;
      case 'start_select':
         body.innerHTML = table.createTable()
         break;
      case 'prediction':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         body.innerHTML = nav.navHome2()
         break;
      case 'start':
         body.innerHTML = nav.navHome2()
         break;
      case 'login_in':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         body.innerHTML = nav.navLogin()
         break;
      case 'createCanvas':
         let name = document.body.querySelector('[data-id="nameCard"]')
         let desc = document.body.querySelector('[data-id="descCard"]')

         let a = new drawCanvas('#canvas')
         if (count === 7) {
            bin = []
            a.clear()
            count = 1
            let nodeStore = document.body.querySelector('[data-id="stores"]')
            let arrVal = stores.getStore() !== null ? Object.values(stores.getStore()) : null
            let arrKey = stores.getStore() !== null ? Object.keys(stores.getStore()) : null
            nodeStore.innerHTML = pred.renderStore(arrVal, arrKey)
            name.textContent = 'Название гексаграммы'
            desc.textContent = 'Описание гексаграммы'
         }
         let b = Math.round(Math.random())

         if (b > 0) a.draw_1()
         else a.draw_0()

         bin.push(b)
         if (count === 6) {

            if (imgNum[bin.join('')] !== null) {

               name.textContent = imgNum[bin.join('')]
               desc.textContent = imgDesc[bin.join('')]
               stores.setStore(bin.join(''))
            }
            else console.log('not found')
         }
         count++
         break;
      case 'popup_open':
         let binId = e.target.dataset.type
         stores.setStore(binId)
         popupContent.innerHTML = popup.createModal(binId)
         popupBody.classList.add('open')
         break;
      case 'popup_close':
         popupContent.innerHTML = ''
         popupBody.classList.remove('open')
         break;
      case 'details':
         let bi = e.target.dataset.type
         popupContent.innerHTML = popup.createModal(bi)
         popupBody.classList.add('open')
         break;
      case 'stores_table':
         let arVal = stores.getStore() !== null ? Object.values(stores.getStore()) : null
         let arKey = stores.getStore() !== null ? Object.keys(stores.getStore()) : null
         body.innerHTML = pred.navStores(arVal, arKey)
         break;
   }
})

