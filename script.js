const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const message = document.getElementById("message")
const affiche_message = document.getElementById("affiche_message")

message.addEventListener("click", ()=>{
  alert("Je vous remercie pour l'attention que vous portez à ma page.Si vous etes sur un téléphone veuillé cliquer sur le bouton envoyer")
});

affiche_message.addEventListener("click", ()=>{
  if(window.innerWidth <= 768){
    alert("Je vous remercie pour l'attention que vous portez à ma page.")
  }
    
});
hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})