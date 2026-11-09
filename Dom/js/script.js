// const prenom = "Amina";
// const nom = document.getElementById("firstname")

// const { createElement } = require("react")





// nom.textContent = prenom

// ex 2

// const button = document.getElementById("btn")
// const msg = document.getElementById("message");

// button.addEventListener("click", () => {
//     console.log("reda")

// })
// ex3

// const button = document.getElementById("btn")
// const msg = document.getElementById("message");

// button.addEventListener("click", () => {
//     // msg.classList.toggle("msgg")
// //    msg.className = "msgg"

// })

// ex 4
// const body = document.getElementById("body")

// const paragraph = document.createElement("p")
// paragraph.textContent = "good";

// body.append(paragraph)

// ex 5

// ex 6
// const field = document.getElementById("todo-input")
// const button = document.getElementById("add-btn")
// const liste = document.getElementById("todo")

// button.addEventListener("click", () => {

//     const li = document.createElement("li")
//     li.textContent = field.value
//     field.value = ""
//     liste.append(li)

// })


// const list = document.getElementById("todo");
// const input = document.getElementById("todo-input");
// const addBtn = document.getElementById("add-btn");

// // Les écouteurs sont attachés UNE SEULE FOIS, au chargement,
// // uniquement aux <li> qui existent à ce moment-là.
// document.querySelectorAll("#todo li").forEach((li) => {
//   li.addEventListener("click", () => li.classList.toggle("done"));
// });

// addBtn.addEventListener("click", () => {
//   if (input.value.trim() === "") return;
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   list.appendChild(li);
//   input.value = "";
//   console.log("Nouveau <li> ajouté… mais il n'a aucun écouteur : le clic ne le rayera pas !");
// });
// ex 1 N2

// const variable = document.getElementById("1")
// const variablee = document.getElementById("2")
// const variableee = document.getElementById("3")
// const variabler = document.getElementById("4")
// const object = {
//     nom:"said",
//     email:"zeze@gmail.com",
//     role:"admistrator",
// }
// variablee.textContent = object.nom
// variableee.textContent = object.email
// variabler.textContent = object.role
// ex 2 N2
// const addBtn = document.getElementById("btn");
// addBtn.addEventListener("click", (e) => {
//     e.target.textContent = "rr"
//     addBtn.textContent = "est click"
    
// })
// ex 3 N2
// const text = document.getElementById("para")
// const addBtn = document.getElementById("btn");
// addBtn.addEventListener("click", () => {
//     text.removeAttribute("hidden")
//     text.classList.toggle("para")
// })
// ex 4 N2 
// const image = document.querySelector(".img")
// const test = document.createElement("img")
// test.setAttribute('src', 'img.png')
// test.src = 'img.png'
// image.append(test)

// ex 5 N 2 
// const inpute = document.getElementById("live-input")
// const live = document.getElementById("live-output")

// inpute.addEventListener("input", () => {
//     live.textContent = inpute.value
//     live.textContent = event.target.value
// })
// ex 6 N 2

// const field = document.getElementById("todo-input")
// const button = document.getElementById("add-btn")
// const liste = document.getElementById("todo")


// liste.addEventListener("click", () => {
//     const li = event.target.closest("li")
//     li.classList.toggle("para")
    
// })

// button.addEventListener("click", () => {

//     const li = document.createElement("li")
//     li.textContent = field.value
//     field.value = ""
//     liste.append(li)

// })

// ex 1 N3

// const variable = document.querySelector(".art")
// const variablee = document.querySelector(".name")
// const variableee = document.querySelector(".email")
// const variabler = document.querySelector(".role")
// const object = {
//     nom:"said",
//     email:"zeze@gmail.com",
//     role:"admistrator",
// }
// variablee.textContent = object.nom
// variableee.textContent = object.email
// variabler.textContent = object.role


// ex 2 N3 
// const article = document.querySelectorAll(".art")
// article.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         btn.textContent = "rr"
//     })
// })

// ex 3 N3
// const nav = document.querySelectorAll("li")
// nav.forEach((li) => {
//     li.addEventListener("click", () => {
//        nav.forEach((elem) => elem.classList.remove("active"))
        
//         li.classList.add("active")
//     })
// })

// ex 4 N3
// const body = document.getElementById("body")
// const liste = document.getElementById("liste")
// const language = [
//    " js",
//     "Python",
//     "rust",
//     "CSSs",
// ]

// language.forEach((elem) => {
//     const li = document.createElement("li")
//     li.append([elem])

//     liste.append(li)
// })


// ex 5 N3
// const object = {
//     userName: "" ,
//     email: "" ,
// }
// const nameField = document.getElementById("nom")
// const emailField = document.getElementById("email")
// const form = document.getElementById("signup-form")
// const ajouter = document.getElementById("ajt")
// ajouter.addEventListener("click", (e) => {
//     e.preventDefault()
//     object.userName = nameField.value
//     object.email = emailField.value
//     form.reset()

//     console.log(object)
// })

// ex 6 N3 


// const liste = document.getElementById("liste")
// const searchField = document.getElementById("search")
// let language = [
//    " js",
//     "Python",
//     "rust",
//     "CSSs",
// ]
// function afficher (language) {
// liste.innerHTML = ""
// language.forEach((elem) => {
//     const li = document.createElement("li")
//     li.append(elem)

//     liste.append(li)
// })


// }

// afficher(language)

// searchField.addEventListener("input", () => {

//    let copy = language.filter((elm) => {
//        return  elm.includes(searchField.value)   
//     })
//     if(searchField.value == ""){
//         afficher(language)
//     }
    
//     afficher(copy)
// })
// ex 1 N4
// const array = [
//     {
//         nom:"said1",
//         prenom:"snkrt",
//         email:"said@gmail.com"
//     }
//     ,
    
//     {
//         nom:"said2",
//         prenom:"snkrt",
//         email:"said@gmail.com"
//     }
//     ,
//     {
//         nom:"said3",
//         prenom:"snkrt",
//         email:"said@gmail.com"
//     }
//     ,
//     {
//         nom:"said4",
//         prenom:"snkrt",
//         email:"said@gmail.com"
//     }
// ]


// const liste = document.querySelector(".liste")
// let cards = document.querySelectorAll("#card")


    

// cards.forEach((card,index) => {
//   const personne = array[index]
//   const nom = document.createElement("h3")
//   nom.textContent = personne.nom
//   const prenom = document.createElement("p")
//   prenom.textContent = personne.prenom
//   const email = document.createElement("p")
//   email.textContent = personne.email
//   card.append(nom,prenom,email)

// })




const ss = 1

 






















