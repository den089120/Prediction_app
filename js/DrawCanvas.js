class drawCanvas {
   constructor(id) {
      this.parentNode = id !== null ? document.body.querySelector(`${id}`) : id
   }

   draw_1() {
      let node = document.createElement('div')
      node.classList.add('d-flex', 'p-1')
      // node1.setAttribute('style', 'width: 40px; height: 10px ')
      node.innerHTML = `<div class="btn btn-primary p-1" style="width: 95px; height: 10px"></div>`
      this.parentNode.append(node)
   }
   draw_0() {
      let a = document.createElement('div')
      a.classList.add('d-flex', 'justify-content-between', 'p-1')
      a.innerHTML = `<div class="btn btn-primary p-1" style="width: 40px;height: 10px"></div>
                     <div class="btn btn-primary p-1" style="width: 40px;height: 10px"></div>`
      this.parentNode.append(a)
   }
   draw_1_im(bin = null) {
      return `<div class="d-flex p-1">
                 <div class="btn btn-primary p-1" style="width: 95px; height: 10px"></div>
              </div>`
   }
   draw_0_im(bin = null) {
      return `<div class="d-flex justify-content-between p-1">
                  <div class="btn btn-primary p-1" style="width: 40px; height: 10px"></div>
                  <div class="btn btn-primary p-1" style="width: 40px; height: 10px"></div>
              </div>`
   }
   clear() {
      this.parentNode.innerHTML = ''
   }
}
