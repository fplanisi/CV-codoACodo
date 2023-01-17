// language
let check = document.querySelector(".check");
check.addEventListener('click',idioma);
function idioma(){
  let id=check.checked;
    if (id==true){location.href="es/index.html"}
    else{location.href="../index.html"}}


//signature
function sign() {
  document.getElementById("signature").style.display = "inline-block";
  document.querySelector(".btn-s").style.display = "none";
}

//date
function startTime() {
  const d = new Date();
  document.getElementById('date').innerHTML =  d.toDateString()
  document.getElementById("date").style.display = "inline";
  document.querySelector(".btn-d").style.display = "none";
}

//console.log
function consoleLog() {
  document.querySelector(".CV-lado-B__footer-text").style.display = "block";
  document.querySelector(".CV-lado-B__footer-title").style.display = "block";
}