let button = document.getElementById("search-btn");
let searchbox = document.getElementById("searchbox");
let result = document.getElementById("result");
let num = document.getElementById("num")

button.addEventListener("click", function (e) {
fetch(`http://numbersapi.com/${searchbox.value}?json`) 
.then(function (res) {
            return res.json();
        })
        .then(function (data) {
            num.innerText= data.number;
            result.innerText = data.text;
        });
});