class Store {
   constructor() {
      this.key = 'Prediction_app'
      this.userKey = 'email'
      this.keyUsers = 'usersKey'
      this.storeQues = 'questions'
      this.storePred = 'predictions'
   }

   setStore(objQ, objP = null) {
      let c = this.getStore()
      let user = this.getUserRoleActive()[this.userKey]
      let d = new Date()
      let a = {}
      if (c === null) {
         if (objQ !== null) {
            c = {[user]: {
                  [this.storeQues]: {
                     [d] : objQ
                  },
                  [this.storePred]: objP
               }
            }
         }
         if (objP !== null) {
            c = {[user]: {
                  [this.storeQues]: objQ,
                  [this.storePred]: {
                     [d] : objP
                  }
               }
            }
         }
      } else if (c[user] === undefined) {
         if (objQ !== null) {
            c[user]= {
               [this.storeQues]: {
                  [d] : objQ
               },
               [this.storePred]: objP
            }
         }
         if (objP !== null) {
            c[user]= {
               [this.storeQues]: objQ,
               [this.storePred]: {
                  [d] : objP
               }
            }
         }
      }
      else {
         if (objQ !== null) {
            a = c[user][this.storeQues]
            if (a === null) {
               a = {[d.toString()] : objQ}
            } else {
               a[d.toString()] = objQ
            }
            c[user][this.storeQues] = a
         } else if (objP !== null) {
            a = c[user][this.storePred]
            if (a === null) {
               a = {[d.toString()] : objP}
            } else {
               a[d.toString()] = objP
            }
            c[user][this.storePred] = a
         }
      }
      localStorage.setItem(this.key, JSON.stringify(c))
   }

   getStore() {
      return  JSON.parse(localStorage.getItem(this.key))
   }
   getStoreQuest() {
      let user = this.getUserRoleActive()[this.userKey]
      let st = this.getStore()
      if (st === null) {
         return null
      } else if (st[user] === undefined) {
         return null
      }
      else {
         return st[user][this.storeQues]
      }
   }

   getStorePred() {
      let user = this.getUserRoleActive()[this.userKey]
      let st = this.getStore()
      if (st === null) {
         return null
      } else if (st[user] === undefined) {
         return null
      }
      else {
         return st[user][this.storePred]
      }

   }

   setUser(obj, role) {
      let key = obj[this.userKey]
      obj['role'] = role
      obj['active'] = true
      let arr = this.getAllUser()
      if (arr === null) {
         arr = {}
         arr[key] = obj
      } else {
         arr[key] = obj
      }
      this.userNickName = key
      this.roleUser = role

      localStorage.setItem(this.keyUsers, JSON.stringify(arr))
   }

   getAllUser() {
      return JSON.parse(localStorage.getItem(this.keyUsers))
   }

   getUserRoleActive() {
      let arr = this.getAllUser()
      if (arr !== null) {
         let ar = Object.keys(arr)
         for (let i = 0; i < ar.length; i++) {
            if (arr[ar[i]]['active'] === true) return arr[ar[i]]
         }
      }
      return false
   }

   setActiveFor(active, obj = {}) {
      let b = this.getAllUser()
      if (active === true) {
         obj['active'] = active
         b[obj[this.userKey]] = obj
         localStorage.setItem(this.keyUsers, JSON.stringify(b))
      } else {
         let ob = this.getUserRoleActive()
         ob['active'] = active
         b[ob[this.userKey]] = ob
         localStorage.setItem(this.keyUsers, JSON.stringify(b))
      }
   }

   getUser(userKey) {
      let a = JSON.parse(localStorage.getItem(this.keyUsers))
      if (a === null) {
         return null
      } else if (a[userKey] === undefined){
         return null
      }
      else {
         return a[userKey]
      }
   }

   isUser(obj) {
      let key = obj[this.userKey]
      return (this.getUser(key) !== null)
   }
}