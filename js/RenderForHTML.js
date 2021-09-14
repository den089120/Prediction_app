class RenderForHtml extends TemplateHtml {
   constructor() {
      super()
      this.navDom = document.body.querySelector('[data-id="nav-bar"]')
      this.popupContent = document.body.querySelector('[data-id="popup_content"]')
      this.popupBody = document.body.querySelector('#popup')
      this.bodyDom = document.body.querySelector('#createBody')

      this.formReg = new FormControl()
      this.pred = new Prediction()
   }


   renderNav() {
      if (this.getAllUser() === null || this.getUserRoleActive() === false) {
         this.navDom.innerHTML = this.navUndefined()
      }
      else {
         if (this.getUserRoleActive()['role'] === ROLE_ADMIN) this.navDom.innerHTML = this.navAdmin(this.getUserRoleActive()[this.userKey])
         if (this.getUserRoleActive()['role'] === ROLE_USER) this.navDom.innerHTML = this.navUser(this.getUserRoleActive()[this.userKey])
      }
   }
   renderHome() {
      this.renderNav()
      this.bodyDom.innerHTML = this.navHome2()
   }
   renderQuestion() {
      let arrObj = null
      let arrDate = null
      let val = []
      let quest = []
      if (this.getUserRoleActive() !== false) {
         arrDate = this.getStoreQuest() !== null ? Object.keys(this.getStoreQuest()) : null
         if (arrDate !== null) {
            arrObj = this.getStoreQuest()
            for (let i = 0; i < arrDate.length; i++) {
               let as = Object.keys(arrObj[arrDate[i]])
               val.push(arrObj[arrDate[i]][as[0]])
               quest.push(as[0])
            }
         }
      }
      this.bodyDom.innerHTML = this.pred.questionBody(val, quest, arrDate)

      let valInput = document.body.querySelector('[data-id="inputQuestion"]')
      let btn = document.body.querySelector('[data-id="btn-question"]')
      btn.disabled = true
      valInput.addEventListener('input', ()=>{
         btn.disabled = false
      })
   }
   renderCreate(arrVal, arrKey) {
      this.bodyDom.innerHTML = this.pred.templateBody(arrVal, arrKey)
   }
   renderTable() {
      this.bodyDom.innerHTML = this.pred.createTable()
   }
   renderForm() {
      this.bodyDom.innerHTML = this.navReg()

      let fullName = document.body.querySelector('[data-id="full_name"]')
      let nameComment = document.body.querySelector('[data-id="name_comment"]')
      let email = document.body.querySelector('[data-id="email"]')
      let emailComment = document.body.querySelector('[data-id="email_comment"]')
      let password = document.body.querySelector('[data-id="new_password"]')
      let passComment = document.body.querySelector('[data-id="password_comment"]')
      let pass2 = document.body.querySelector('[data-id="duplicate_password"]')

      this.formReg.fullName(fullName, nameComment)
      this.formReg.email_In(email, emailComment)
      this.formReg.password_In(password, passComment)
      this.formReg.duplPass_In(pass2, passComment)
   }
   returnForm() {
      return this.formReg
   }
   renderLogin() {
      this.bodyDom.innerHTML = this.navLogin()
   }
   renderModal(bin) {
      this.popupContent.innerHTML = createModal(bin)
      this.popupBody.classList.add('open')
   }
   destroyModal() {
      this.popupContent.innerHTML = ''
      this.popupBody.classList.remove('open')
   }
   renderStore() {
      let arVal = null
      let arKey = null

      let arrObj = null
      let arrDate = null
      let val = []
      let quest = []

      if (renDom.getUserRoleActive() !== false) {
         arVal = renDom.getStorePred() !== null ? Object.values(renDom.getStorePred()) : null
         arKey = renDom.getStorePred() !== null ? Object.keys(renDom.getStorePred()) : null

         arrDate = this.getStoreQuest() !== null ? Object.keys(this.getStoreQuest()) : null
         if (arrDate !== null) {
            arrObj = this.getStoreQuest()
            for (let i = 0; i < arrDate.length; i++) {
               let as = Object.keys(arrObj[arrDate[i]])
               val.push(arrObj[arrDate[i]][as[0]])
               quest.push(as[0])
            }
         }
      }

      this.bodyDom.innerHTML = this.pred.navAllStores(arVal, arKey, val, quest, arrDate)
   }
}