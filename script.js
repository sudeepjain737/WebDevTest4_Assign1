let alice = "";
let lord = "";
let dr_jykell = "";
let js = {};

function loadalice(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        alice = this.responseText;
        bookdisplay(alice);
    }
    xhttp.open("GET", 'alice.txt');
    xhttp.send();
}

function loadlord(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        lord = this.responseText;
        bookdisplay(lord);
    }
    xhttp.open("GET", 'lord.txt');
    xhttp.send();
}

function loaddr(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        dr_jykell = this.responseText;
        bookdisplay(dr_jykell);
    }
    xhttp.open("GET", 'dr_jekyll.txt');
    xhttp.send();
}

function bookdisplay(bookname){
    // let str = '';
    document.querySelector('.book').innerHTML = bookname;
}

function search(){
    let count = document.querySelector('.book').textContent.search(document.querySelector('.serachvalue').value);
    document.querySelector('.serachvalue').value = '';
    if(count !== -1){
        console.log(count);
        document.querySelector('.searchdiv').innerHTML = `<span>found ${count} matches</span>`
    }  
}

function mostusedwords(){
    
}