let tweetOne = document.querySelector("#reserv");
let buttonDesc = document.querySelector("#description");
let buttonLang = document.querySelector("#language");
let buttonMed = document.querySelector("#medium");
let buttonLove = document.querySelector("#i_like");


buttonDesc.addEventListener("click", () => {
    event.preventDefault();
    let articleOne = document.createElement("article");
    let imageIcon = document.createElement("img");
    let contHeadArti = document.createElement("div");
    let whoIAm = document.createElement("li");

    tweetOne.removeChild();
    articleOne.textContent = "Ceci est un test. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");

    
    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
})

// function tweetLonger() {

// }
// tweetLonger();