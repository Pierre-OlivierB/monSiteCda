let tweetOne = document.querySelector("#reserv");
let buttonDesc = document.querySelector("#description");
let buttonLang = document.querySelector("#language");
let buttonMed = document.querySelector("#medium");
let buttonLove = document.querySelector("#i_like");
let test = true;

// Descriptions part
buttonDesc.addEventListener("click", (e) => {
    event.preventDefault();
    if (test === false) {
        tweetOne.removeChild(tweetOne.childNodes[0]);
        createDescPage(e);
        console.log("oui");
    }
    else {
        createDescPage(e);
    }


})
function createDescPage() {
    let articleOne = document.createElement("article");
    let imageIcon = document.createElement("img");
    let contHeadArti = document.createElement("div");
    let whoIAm = document.createElement("li");


    articleOne.textContent = "Ceci est un test Desc. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}

// langages utilisés part
buttonLang.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        tweetOne.removeChild();
        createLangPage();
        console.log("oui");
    }
    else {
        createLangPage();
    }


})
function createLangPage() {
    let articleOne = document.createElement("article");
    let imageIcon = document.createElement("img");
    let contHeadArti = document.createElement("div");
    let whoIAm = document.createElement("li");


    articleOne.textContent = "Ceci est un test Lang. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// Médias part
buttonMed.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        tweetOne.removeChild();
        createMedPage();
        console.log("oui");
    }
    else {
        createMedPage();
    }


})
function createMedPage() {
    let articleOne = document.createElement("article");
    let imageIcon = document.createElement("img");
    let contHeadArti = document.createElement("div");
    let whoIAm = document.createElement("li");


    articleOne.textContent = "Ceci est un test Med. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// J'aime part
buttonLove.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        tweetOne.removeChild();
        createLovePage();
        console.log("oui");
    }
    else {
        createLovePage();
    }


})
function createLovePage() {
    let articleOne = document.createElement("article");
    let imageIcon = document.createElement("img");
    let contHeadArti = document.createElement("div");
    let whoIAm = document.createElement("li");


    articleOne.textContent = "Ceci est un test Love. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// function tweetLonger() {

// }
// tweetLonger();