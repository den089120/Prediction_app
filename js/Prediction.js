class Prediction {


   templateCard() {
      return `
         <div class="card me-auto p-2" style="width: 20rem;">
             <div class="m-auto" id="canvas" style="width:100px;height:114px"></div>
             <div class="card-body">
                <h5 class="card-title text-center" data-id="nameCard">Название гексаграммы</h5>
                <div class="text-center">
                    <button class="btn btn-primary m-auto" data-id="createCanvas">Нажмите для генерации</button>
                </div>
                <p class="card-text" data-id="descCard">Описание гексаграммы</p>
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
   navStores(arVal, arKey) {
      return `
      <div class="" style="display: grid;grid-template-columns: 1fr 1fr 1fr;margin-top: 20px">
        ${this.renderStore(arVal, arKey)}
      </div>
      `
   }
}
