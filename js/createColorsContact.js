window.onload = () => {
   colorsContact();

}

const colorsContact = () => {
   let con = 'Contact';
   let h4_ar = con.split("")

   let colors1 = ['#9453a6', '#8cbf3f', '#f2cc0f', '#0d0d0d'];
   let showContent = document.querySelector('#contactHeader');
   let i = 0;


   h4_ar.map(item => {
      showContent.innerHTML += `<span style='color:${colors1[i]}'>${item}</span>`
      i++
      if (i >= colors1.length) {
         i = 0;
      }
   })
}