class Prediction {
   constructor() {
      this.SIZE_ROW = 8
      this.SIZE_COL = 8
   }
   // Create
   templateCard() {
      return `
         <div class="card me-auto p-2" style="width: 20rem;">
             <div class="m-auto" id="canvas" style="width:100px;height:114px"></div>
             <div class="card-body">
                <h5 class="card-title text-center" data-id="nameCard">Название гексаграммы</h5>
                <div class="text-center">
                    <button class="btn btn-primary m-auto" data-id="createCanvas">Нажмите для генерации</button>
                </div>
                <p class="card-text text-center" data-id="descCard">Описание гексаграммы</p>
             </div>
         </div>
      `
   }
   templateBody(arrVal, arrKey) {
      return `
      <div class="d-flex  mb-3" data-id="card_create">
         ${this.templateCard()}
         <div class="">
            <div class="text-center p-1">История предсказаний.</div>
            <div class="p-2 d-flex flex-column" style="" data-id="stores"> 
                ${this.renderStore(arrVal, arrKey)}
            </div>
         </div>
      </div>
      `
   }
   templateCardStore(bin, key) {
      let date = key.split(' ').slice(2, 5).join(' ')
      return `
        <div class="card d-flex flex-row justify-content-around" style="width: 22rem;">
           <div class="" style="width:100px;height:114px">${createImg(bin)}</div>
           <div class="d-flex flex-column">
                <h5 class="card-title text-center">Дата и время</h5>
                <h5 class="card-title text-center">${date}</h5>
                <button type="button" class="btn btn-secondary btn-sm" data-id="details" data-type="${bin}">Подробнее...</button>
           </div>
        </div>
      `
   }
   renderStore(arrVal, arrKey) {
      if (arrVal === null)
         return `
         <div class="text-center">
            У вас еще нет записей о предыдущем гадании
         </div>
         `
      else {
         let ar = []
         for (let i=0; i < arrVal.length; i++) {
            ar.push(this.templateCardStore(arrVal[i], arrKey[i]))
         }
         return ar.join('')
      }
   }

   // Stores
   navAllStores(binPred, datePred, binQuest, question, dateQuest) {
      return `
      <div class="row mt-5">
        <div class="col">
            <h5 class="m-2 text-center">История предсказаний</h5>
            ${this.renderStore(binPred, datePred)}
        </div>
        <div class="col">
            <h5 class="m-2 text-center">История вопросов</h5>
            ${this.renQuestionStore(binQuest, question, dateQuest)}
        </div>
      </div>
      `
   }
   // Table
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
   // Question
   questionCard() {
      return `
       <form class="me-auto p-2" style="width: 20rem;">
        <div class="mb-3">
            <label for="exampleInputQuestion" class="form-label">Ваш вопрос</label>
            <input type="text" class="form-control" id="exampleInputQuestion" aria-describedby="emailHelp" data-id="inputQuestion">
        </div>
        <button type="submit" class="btn btn-primary" data-id="btn-question" >получить ответ</button>
      </form>
      `
   }
   renQuestionStore(arrVal, quest, arrKey) {
      if (arrVal === null)
         return `
         <div class="text-center">
            У вас еще нет записей о предыдущих вопросах
         </div>
         `
      else {
         let ar = []
         for (let i=0; i < arrVal.length; i++) {
            ar.push(this.questCardStore(arrVal[i], quest[i], arrKey[i]))
         }
         return ar.join('')
      }
   }
   questCardStore(bin, question, key) {
      let date = key.split(' ').slice(2, 5).join(' ')
      return `
        <div class="card d-flex flex-row justify-content-around" style="width: 22rem;">
           <div class="" style="width:100px;height:114px">${createImg(bin)}</div>
           <div class="d-flex flex-column">
                <h5 class="card-title text-center">Дата и время</h5>
                <h5 class="card-title text-center">${date}</h5>
                <h5 class="card-title text-center">${question}</h5>
                <button type="button" class="btn btn-secondary btn-sm" data-id="details" data-type="${bin}">Подробнее...</button>
           </div>
        </div>
      `
   }
   questionBody(arrVal, question, arrKey) {
      return `
      <div class="d-flex  mb-3" data-id="card_create">
         ${this.questionCard()}
         <div class="">
            <div class="text-center p-1">История вопросов.</div>
            <div class="p-2 d-flex flex-column" style="" data-id="stores"> 
                ${this.renQuestionStore(arrVal, question, arrKey)}
            </div>
         </div>
      </div>
      `
   }
}
