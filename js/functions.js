function createImg(bin, node = null) {
   let s = new DrawCanvas(node)
   let arr = bin.split('')
   let b = []
   for (let i=0; i<arr.length; i++) {
      if (arr[i] === '0') b.push(s.draw_0_im(bin))
      else b.push(s.draw_1_im(bin))
   }
   return b.join('')
}


function createModal(bin) {
   return `
      <div class="popup_close btn" data-id="popup_close">Закрыть</div>
      <div class="popup_img">${createImg(bin)}</div>
      <div class="popup_title">${imgNum[bin]}</div>
      <div class="popup_text">${imgDesc[bin]}</div>
      `
   }
