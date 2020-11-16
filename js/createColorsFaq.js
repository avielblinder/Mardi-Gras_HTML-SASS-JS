 
window.onload = ()=>{
    colorsCreateAbout();
 
 }
  
  const colorsCreateAbout = ()=>{
     let content = 'FAQ';
     let h3_ar = content.split("")
     let colors = ['#9453a6','#8cbf3f','#f2cc0f','#0d0d0d'];
     let showColors = document.querySelector('#faqHeader');
     let i = 0; 
     h3_ar.map(item => {
         showColors.innerHTML += `<span style='color:${colors[i]}'>${item}</span>`
        i++
        if(i>=colors.length){
           i=0;
        }
     })    
  }
 