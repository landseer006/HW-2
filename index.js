// list data variables
let listData = [];
let newData = [];

document.addEventListener("DOMContentLoaded", function (event) {
    startPage.style.display = "block";
    finalPage.style.display = "none";
    document.getElementById("changeBtn").style.visibility = "hidden";
});


//====================================================================
// functions defined below

function start() {
    for (let i = 0; i < 3; i++) {
        listData.push(prompt("Please enter a word:"));
    }
    makeList();//old array list
    document.getElementById("startBtn").style.visibility = "hidden";
    document.getElementById("changeBtn").style.visibility = "visible";
}

function change() {
    startPage.style.display = "none";
    finalPage.style.display = "block";
    newData = listData.map(function (oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });    
    makeList2(); // new arry list 
}


function makeList() {
    let ul = document.createElement('ul');
    document.getElementById('myList').appendChild(ul);
    for (let i = 0; i < listData.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = listData[i];
    }
}



function makeList2() {
    let ul = document.createElement('ul');
    document.getElementById('myNewList').appendChild(ul);
    for (let i = 0; i < newData.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = newData[i];
    }
}





