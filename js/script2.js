function pindahKeHalamanLain() {
  // Menggunakan window.location.href untuk mengarahkan ke halaman lain
  window.location.href = "index.html";
}

function pindahKeHalamanDetailPortofolio1() {
  // Menggunakan window.location.href untuk mengarahkan ke halaman lain
  window.location.href = "index.html";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");


}