class FormControl {
   constructor() {
      this.NAME_LENGTH = 3
      this.EMAIL_LENGTH = 5
      this.PASSWORD_LENGTH = 8
      this.password = ''
      this.validation = {}
      this.url = 'http://localhost:63342/'
   }

   fullName(nodeInput, nodeComment) {
      nodeInput.addEventListener('input', (e)=>{
         this.validation[`${e.target.dataset.id}`] = false
         if (e.target.value.length < this.NAME_LENGTH) {
            nodeComment.textContent = 'Не корректное имя и фамилия'
         }
         else {
            nodeComment.textContent = 'Имя и фмилия введены корректно'
            this.validation[`${e.target.dataset.id}`] = true
         }
      })
   }

   email_In(nodeInput, nodeComment) {
      nodeInput.addEventListener('input', (e)=>{
         this.validation[`${e.target.dataset.id}`] = false
         let arr = e.target.value.split('')
         if (arr.length < this.EMAIL_LENGTH && !arr.includes('@')) {
            nodeComment.textContent = 'Не корректный email'
         }
         else {
            nodeComment.textContent = 'Email введен корректно'
            this.validation[`${e.target.dataset.id}`] = true
         }
      })
   }

   password_In(nodeInput, nodeComment) {
      nodeInput.addEventListener('input', (e) => {
         this.validation[`${e.target.dataset.id}`] = false
         let str = e.target.value.split('')
         if (str.length < this.PASSWORD_LENGTH) {
            nodeComment.textContent = 'Короткий пароль'
         } else if (str.includes(' ')) {
            nodeComment.textContent = 'Пробелы не допустимы'
         }
         else {
            nodeComment.textContent = 'пароль корректен'
            this.validation[`${e.target.dataset.id}`] = true
            this.password = str.join('')
         }
      })
   }
   duplPass_In(duplInput, nodeComment) {
      duplInput.addEventListener('input', (e) => {
         this.validation[`${e.target.dataset.id}`] = false
         let str = e.target.value
         if (str === this.password) {
            nodeComment.textContent = 'не совпадает пароль'
         }
         else {
            nodeComment.textContent = 'пароль корректен'
            this.validation[`${e.target.dataset.id}`] = true
         }
      })
   }

   createPassword(nodeInput, duplInput) {
      let pass = []
      for (let i=0; i < (this.PASSWORD_LENGTH+1); i++) {
         pass.push(Math.round(Math.random()*(126 - 33) + 33))
      }
      nodeInput.value = String.fromCharCode(...pass)
      duplInput.value = String.fromCharCode(...pass)
      this.validation[`${nodeInput.getAttribute('data-id')}`] = true
      this.validation[`${duplInput.getAttribute('data-id')}`] = true

   }

   isValid() {
      let b = Object.values(this.validation)
      return (b.includes(true))
   }

   fetchUser(method, url, body = null) {
      return fetch(url, {
         method: method,
         body: body,
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(response => {
         return response.json()
      })
   }

   submit_In(e) {
      let objUser = {}

      e.preventDefault()
      if (this.isValid()) {
         let id = Object.keys(this.validation)
         id = id.filter(el=> el !== 'duplicate_password')
         console.log(id)
         id.forEach(el => {
            objUser[el] = document.body.querySelector(`[data-id="${el}"]`).value
         })
         console.log(objUser)
         e.stopPropagation()

         this.fetchUser('POST', this.url, JSON.stringify(objUser)).then(data =>{
            console.log(data)
         })
      }
      else {
         console.log('not found')
         e.stopPropagation()
      }

   }
}