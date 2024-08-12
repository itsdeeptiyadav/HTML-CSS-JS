function change(){
    let para=document.querySelector('.fpara');
   
    para.textContent="hey there";
}
let para=document.querySelector('p');
para.addEventListener('click',change);