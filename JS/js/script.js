let address = "Yliopistonkatu36";
let city = "Lappeenranta";
let place = "https://www.google.com/maps?q=" + address + city + "&output=embed";

function search(){
    //Get element values
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;

    //Remove spaces from url
    place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let searchPlace = place.replaceAll(" ", "");
    console.log(searchPlace);

    //Update the map
    let iframeElement = document.getElementById("map-frame");
    iframeElement.src = searchPlace;
}