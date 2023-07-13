const btnMobile = document.getElementById("btn-mobile")

function toggleMenu(){
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    const body = document.getElementsByTagName("body")[0]
    body.classList.toggle("blur")

}

btnMobile.addEventListener("click", toggleMenu)



function skill (skill){

    const cardImg = document.getElementById("cardImg")
    const textCard = document.getElementById("textContainerCard")

    cardImg.innerHTML = `
    <div class="card cardTextImg"><img src="${skill.children[2].src}" alt=""></div>


        <div id="textContainerCard" class="textContainerCard">
        <p id="cardTitle">${skill.children[0].innerText}</p>
        <p>${skill.children[1].innerText}</p>
    </div>

    `
}

