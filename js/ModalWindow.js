class ModalWindow {

   createModal(bin) {
      return `
      <div class="popup_close btn" data-id="popup_close">Закрыть</div>
      <div class="popup_img">${createImg(bin)}</div>
      <div class="popup_title">${imgNum[bin]}</div>
      <div class="popup_text">${imgDesc[bin]}</div>
      `
   }
}
