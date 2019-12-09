var isFirstClick=false;
var posts = document.getElementsByClassName("clubArea");
function onFirstClickDisappearAll(){
  if(isFirstClick==false){
    for(var i = 0; i<posts.length; i++){
      posts[i].style.display = "none";
    }
    isFirstClick=true;
    }
}

function appearAll(){
  var buttons = document.getElementsByClassName("button-filter");
  for(var i = 0; i<buttons.length; i++){
    if(buttons[i].classList.contains("activeButton")){
      break;
    }
    if(i==buttons.length-1){
      isFirstClick=false;
      for(var j = 0; j<posts.length; j++){
        posts[j].style.display = "block";
      }
    }
  }
}
document.getElementById("adaMun").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("adaMun");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("adaMun-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("adaMun-contents").style.display = "block";
  }
}
document.getElementById("artNcreativity").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("artNcreativity");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("artNcreativity-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("artNcreativity-contents").style.display = "block";
  }
}
document.getElementById("bookClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("bookClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("bookClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("bookClub-contents").style.display = "block";
  }
}
document.getElementById("careerClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("careerClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("careerClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("careerClub-contents").style.display = "block";
  }
}
document.getElementById("chessClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("chessClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("chessClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("chessClub-contents").style.display = "block";
  }
}
document.getElementById("cineMates").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("cineMates");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("cineMates-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("cineMates-contents").style.display = "block";
  }
}
document.getElementById("debateSociety").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("debateSociety");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("debateSociety-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("debateSociety-contents").style.display = "block";
  }
}
document.getElementById("dramaClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("dramaClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("dramaClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("dramaClub-contents").style.display = "block";
  }
}
document.getElementById("esnBaku").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("esnBaku");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("esnBaku-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("esnBaku-contents").style.display = "block";
  }
}
document.getElementById("euroAze").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("euroAze");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("euroAze-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("euroAze-contents").style.display = "block";
  }
}
document.getElementById("historyClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("historyClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("historyClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("historyClub-contents").style.display = "block";
  }
}
document.getElementById("lawSociety").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("lawSociety");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("lawSociety-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("lawSociety-contents").style.display = "block";
  }
}
document.getElementById("milliClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("milliClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("milliClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("milliClub-contents").style.display = "block";
  }
}
document.getElementById("oikosClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("oikosClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("oikosClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("oikosClub-contents").style.display = "block";
  }
}
document.getElementById("photographyClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("photographyClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("photographyClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("photographyClub-contents").style.display = "block";
  }
}
document.getElementById("musicClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("musicClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("musicClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("musicClub-contents").style.display = "block";
  }
}
document.getElementById("energyClub").onclick = function(){
  onFirstClickDisappearAll();
  var buttonElement = document.getElementById("energyClub");
  if(buttonElement.classList.contains("activeButton")){
    buttonElement.classList.remove("activeButton");
    document.getElementById("energyClub-contents").style.display = "none";
    appearAll();
   }
  else{
    buttonElement.classList.add("activeButton");
    document.getElementById("energyClub-contents").style.display = "block";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}