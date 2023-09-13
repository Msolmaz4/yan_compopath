const icon = document.querySelector('i')
const menu = document.querySelector('ul')

// icon.addEventListener('click',tikla)
// function tikla(){
//     if (menu.classList.contains('menu-bars')) {
//         menu.classList.remove('menu-bars')
//         icon.style.color = 'black'
//     } else {
//         menu.classList.add('menu-bars')
//     }
// }
// let i = 2
// let d = 3
// console.log(i**d)

icon.addEventListener('click',()=>{
   if(menu.classList.contains('menu-bars') ){
      menu.classList.remove('menu-bars')
      console.log('tikladiniz')
   }
   else{
      menu.classList.add('menu-bars')
   }
   
})
document.addEventListener('click',(e)=>{
   if(
       !e.composedPath().includes(menu) && !e.composedPath().includes(icon)
   ){
       menu.classList.remove('menu-bars')
   }
})






function dene(a,b){
   let d = ''
   console.log('a',a ,'b',b)
     for(i=0 ; i<a ;i++){
     
     
      console.log('*')
      for(j=0 ; j<b ; j++){
         

         
      }
      
   }

 
}
dene(3,6)