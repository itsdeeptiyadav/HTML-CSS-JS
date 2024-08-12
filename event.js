let paras = document.querySelectorAll('p');
function change(){
    alert("you clicked on para:");


}

for(let j=0;j<paras.length;j++){
    let para=paras[j];
    para.addEventListener('click',change);
}

