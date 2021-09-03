
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
const form = new FormControl()

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

         let fullName = document.body.querySelector('[data-id="full_name"]')
         let nameComment = document.body.querySelector('[data-id="name_comment"]')
         let email = document.body.querySelector('[data-id="email"]')
         let emailComment = document.body.querySelector('[data-id="email_comment"]')
         let password = document.body.querySelector('[data-id="new_password"]')
         let passComment = document.body.querySelector('[data-id="password_comment"]')
         let pass2 = document.body.querySelector('[data-id="duplicate_password"]')


         form.fullName(fullName, nameComment)
         form.email_In(email, emailComment)
         form.password_In(password, passComment)
         form.duplPass_In(pass2, passComment)

         break;
      case 'createPassword':
         let password1 = document.body.querySelector('[data-id="new_password"]')
         let password2 = document.body.querySelector('[data-id="duplicate_password"]')
         form.createPassword(password1, password2)
         break;
      case 'btn_submit':
         form.submit_In(e)
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

