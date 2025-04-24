
let searchcounter = 0;
let searchcount = document.getElementById("searchcount");
let loader = document.getElementById("loader");
let searchResult = document.getElementById("searchresult")
let accordion = document.getElementById("accordionExample");

function getFact(){
    loader.classList.remove("d-none");
    searchResult.innerText = "";
    searchcounter++;
    searchcount.innerText = searchcounter;

    fetch("http://numbersapi.com/random/trivia?json")
    .then(function (response){
        return response.json();
    })

    .then(function (result){
        loader.classList.add("d-none");
        searchResult.innerText = result.text

        let accordionBody = '<div class="accordion-item w-50">'
        +'<h2 class="accordion-header">'
        +'<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+ searchcounter +'" aria-expanded="false" aria-controls="collapse'+ searchcounter +'">Hakutulos '+ searchcounter +'</button>'
        +'</h2>'
        +'<div id="collapse'+ searchcounter +'" class="accordion-collapse collapse" aria-labelledby="collapse'+ searchcounter +'" data-bs-parent="#accordionExample">'
        +'<div class="accordion-body">'+ result.text +'</div>'
        +'</div>'
        +'</div>'

        accordion.innerHTML += accordionBody;
    })



}


