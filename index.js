const navList = document.body.querySelectorAll('.nav-link')

const pred = new Prediction()
const renDom = new RenderForHtml()

let count = 1
let bin = []

renDom.renderHome()

document.body.addEventListener('click', (e)=> {

   const dataId = e.target.dataset.id
   switch (dataId) {
      case 'Home':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         renDom.renderHome()
         break;
      case 'registration':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         renDom.renderForm()

         break;
      case 'createPassword':
         let password1 = document.body.querySelector('[data-id="new_password"]')
         let password2 = document.body.querySelector('[data-id="duplicate_password"]')
         renDom.returnForm().createPassword(password1, password2)
         break;
      case 'btn_submit':
         renDom.returnForm().submit_In(e)
         renDom.renderHome()
         break;
      case 'start_create':
         let arrVal = null
         let arrKey = null
         if (renDom.getUserRoleActive() !== false) {
            arrVal = renDom.getStorePred() !== null ? Object.values(renDom.getStorePred()) : null
            arrKey = renDom.getStorePred() !== null ? Object.keys(renDom.getStorePred()) : null
         }
         renDom.renderCreate(arrVal, arrKey)
         break;
      case 'start_select':
         renDom.renderTable()
         break;
      case 'prediction':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')

         renDom.renderHome()
         break;
      case 'login_in':
         navList.forEach(el=> el.classList.remove('active'))
         e.target.classList.add('active')
         renDom.renderLogin()
         break;
      case 'btn-in':
         e.preventDefault()
         let email = document.body.querySelector('[data-id="inputEmail"]').value
         let pass = document.body.querySelector('[data-id="inputPassword"]').value

         let obj = renDom.getUser(email)
         if (obj !== null) {
            if (obj['new_password'] === pass) {
               e.stopPropagation()
               renDom.setActiveFor(true, obj)
               renDom.renderHome()
            } else {
               e.stopPropagation()
               window.alert('Вы ввели непральный логин или пароль')
               renDom.renderLogin()
            }
         } else {
            e.stopPropagation()
            window.alert('Вы ввели непральный логин или пароль')
            renDom.renderLogin()
         }
         break;
      case 'createCanvas':
         let name = document.body.querySelector('[data-id="nameCard"]')
         let desc = document.body.querySelector('[data-id="descCard"]')

         let a = new DrawCanvas('#canvas')
         if (count === 7) {
            bin = []
            a.clear()
            count = 1
            let nodeStore = document.body.querySelector('[data-id="stores"]')

            let arrVal = null
            let arrKey = null
            if (renDom.getUserRoleActive() !== false) {
               arrVal = renDom.getStorePred() !== null ? Object.values(renDom.getStorePred()) : null
               arrKey = renDom.getStorePred() !== null ? Object.keys(renDom.getStorePred()) : null
            }
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

               if (renDom.getUserRoleActive() !== false) {
                  renDom.setStore(null, bin.join(''))
               }
            }
            else console.log('not found')
         }
         count++
         break;
      case 'popup_open':
         let binId = e.target.dataset.type
         if (renDom.getUserRoleActive() !== false) {
            renDom.setStore(null, binId)
         }
         renDom.renderModal(binId)
         break;
      case 'popup_close':
         renDom.destroyModal()
         break;
      case 'details':
         let bi = e.target.dataset.type
         renDom.renderModal(bi)
         break;
      case 'stores_table':
         renDom.renderStore()
         break;
      case 'login_out':
         renDom.setActiveFor(false)
         renDom.renderHome()
         break;
      case 'btn-question':
         e.preventDefault()
         bin = []
         let valIn = document.body.querySelector('[data-id="inputQuestion"]').value

         for (let i = 0; i < 6; i++) {
            bin.push(Math.round(Math.random()))
         }
         bin = bin.join('')
         let ob = {[valIn]: bin}
         if (renDom.getUserRoleActive() !== false) {
            renDom.setStore(ob)
         }
         e.stopPropagation()
         renDom.renderModal(bin)
         bin = []
         renDom.renderQuestion()
         break;
      case 'start_question':
         renDom.renderQuestion()
         break;
   }
})