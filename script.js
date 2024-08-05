

const color = document.getElementById('colors')
const para = document.getElementById('para')
const bgchange = document.getElementById('bg')
const body = document.getElementById('bod')

color.addEventListener('input',(e) => {
   const bgclr =  e.target.value
   bgchange.style.backgroundColor=bgclr
   para.style.backgroundColor = bgclr;

   body.style.backgroundColor=bgclr
   para.textContent=`Selected color  ${bgclr}`;

}
)