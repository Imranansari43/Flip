const main = document.querySelector('.mainbox');
const second = document.querySelector('.secondbox');
const button = document.querySelector('button');
const add = document.querySelector('input');
const send = document.querySelector('.send');
const para = document.querySelector('.para');
const olist = document.querySelector('ol');

function sendf(){
    const newli = document.createElement('li');
    newli.innerText = add.value;
    olist.append(newli);
    add.value = '';
}


function flip (){
    main.classList.toggle('flip');
    second.classList.toggle('radius');
}