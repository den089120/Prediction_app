class PredictionTable {
   constructor() {
      this.SIZE_ROW = 8
      this.SIZE_COL = 8
   }

   createCell(bin) {
      return `
      <td data-type="${bin}" data-id="popup_open">
        <div class="m-auto" style="width:100px;height:134px;z-index: 5" data-type="${bin}" data-id="popup_open">
            ${createImg(bin)}
            <div class="d-flex" data-type="${bin}" data-id="popup_open">
               <div class="btn btn-secondary btn-sm p-0"
                    style="width: 100px; height: 20px; padding: 2px"
                    data-type="${bin}" data-id="popup_open">
                  Выбрать  
               </div>
            </div>
        </div>
      </td>
      `
   }
   createRow(bin) {
      let row = []
      for (let i = 0; i < this.SIZE_ROW; i++) {
         row.push(this.createCell(bin[i]))
      }
      return `<tr>${row.join('')}</tr>`
   }
   createTable() {
      let imgS = Object.keys(imgNum)
      let row = []
      let c = 0
      for (let i = 0; i < this.SIZE_ROW; i++) {

         let ar = []
         for (let j = 0; j < this.SIZE_COL; j++) {
            ar.push(imgS[c + j])
         }
         row.push(ar)
         c = c + this.SIZE_COL
      }
      let col = []
      for (let i = 0; i < this.SIZE_COL; i++) {
         col.push(this.createRow(row[i]))
      }
      return `
        <table class="table table-borderless table-sm caption-top">
           <caption class="text-center">Таблица гексаграмм</caption>
           <thead>
              <tr>
              </tr>
           </thead>
           <tbody>
              ${col.join('')}
           </tbody>
        </table>
      `
   }
}
