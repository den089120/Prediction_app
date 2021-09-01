class Store {
   constructor() {
      this.key = 'Prediction_app'
   }

   setStore(obj) {
      let c = this.getStore()
      let d = new Date()
      let a = (c === null) ? {} : c
      a[d.toString()] = obj
      localStorage.setItem( this.key,  JSON.stringify(a))
   }

   getStore() {
      return JSON.parse(localStorage.getItem(this.key))
   }
}
