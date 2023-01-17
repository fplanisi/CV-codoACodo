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

//hideList
function hideList() {
  document.querySelector(".list-responsive").style.visibility = "hidden";
}
function showList() {
  document.querySelector(".list-responsive").style.visibility = "visible";
}

//modal
let modal = document.getElementById("myModal");
let content = document.querySelector(".modal-content")
let span = document.getElementsByClassName("close")[0];
let txt = document.getElementById("content")
let btn = 
  [document.getElementById("myImg1"), document.getElementById("myImg2"), document.getElementById("myImg3"), document.getElementById("myImg4"), document.getElementById("myImg5"), document.getElementById("myImg6")]
// open modal
btn[0].onclick = function() {
  content.setAttribute("src","https://img.lovepik.com/free-png/20210919/lovepik-landscape-painting-png-image_400788974_wh1200.png")
  modal.style.display = "block";
}
btn[1].onclick = function() {
  content.setAttribute("src","https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/450_1000.webp")
  modal.style.display = "block";
}
btn[2].onclick = function() {
  content.setAttribute("src","https://media.istockphoto.com/id/1244372877/es/foto/monta%C3%B1a-glacial-lago-garibaldi-con-agua-turquesa-en-medio-de-bosque-de-con%C3%ADferas-al-atardecer.jpg?s=612x612&w=0&k=20&c=_N4n8jlcvFfPPwYWTozclM7bDuZ0PE8ihtzmAMPU0-w=")
  modal.style.display = "block";
}
btn[3].onclick = function() {
  content.setAttribute("src","https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80")
  modal.style.display = "block";
}
btn[4].onclick = function() {
  content.setAttribute("src","https://thumbs.dreamstime.com/b/imagen-vertical-de-un-camino-con-las-magn%C3%ADficas-monta%C3%B1as-bajo-el-cielo-azul-capturado-en-california-163571053.jpg")
  modal.style.display = "block";
}
btn[5].onclick = function() {
  content.setAttribute("src","https://previews.123rf.com/images/smileus/smileus1302/smileus130200033/17897582-hermoso-paisaje-con-lago-turquesa-bosques-y-monta%C3%B1as.jpg")
  modal.style.display = "block";
}
//close modal
span.onclick = function() {modal.style.display = "none";}
window.onclick = function(e) {
  if (e.target == modal) {modal.style.display = "none";}}
window.onkeydown = function(e) {
  if (e.keyCode == 27)
    modal.style.display = "none"
}


//form