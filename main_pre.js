let tweetOne = document.querySelector("#reserv");
let buttonDesc = document.querySelector("#description");
let buttonLang = document.querySelector("#language");
let buttonMed = document.querySelector("#medium");
let buttonLove = document.querySelector("#i_like");
let test = true;

// creation of articles
let articleOne = document.createElement("article");
let imageIcon = document.createElement("img");
let contHeadArti = document.createElement("div");
// top of all articles
let imgVerifToArt = document.createElement("li");
imgVerifToArt.classList.add("img_verif_top_art");
let timeArtCreation = document.createElement("li");
timeArtCreation.textContent="@Montpellier . 1sept";
// top of desciption
let whoIAm = document.createElement("li");




// Descriptions part
buttonDesc.addEventListener("click", (e) => {
    event.preventDefault();
    if (test === false) {
        // faire un tableau/ou un for childNodes.lenght de n nodes pour toutes les supprimer?
        while (tweetOne.firstChild) {
            tweetOne.removeChild(tweetOne.lastChild);
          }
        createDescPage(e);
    }
    else {
        createDescPage(e);
    }


})
function createDescPage() {
    articleOne.textContent = "Ceci est un test Desc. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Qui je suis?";


    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}

// langages utilisés part
buttonLang.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        while (tweetOne.firstChild) {
            tweetOne.removeChild(tweetOne.lastChild);
          }
        createLangPage();
    }
    else {
        createLangPage();
    }


})
function createLangPage() {
    articleOne.textContent = "Ceci est un test Lang. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Langages";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// Médias part
buttonMed.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        while (tweetOne.firstChild) {
            tweetOne.removeChild(tweetOne.lastChild);
          }
        createMedPage();
    }
    else {
        createMedPage();
    }


})
function createMedPage() {
    articleOne.textContent = "Ceci est un test Med. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "Médias?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// J'aime part
buttonLove.addEventListener("click", () => {
    event.preventDefault();
    if (test === false) {
        while (tweetOne.firstChild) {
            tweetOne.removeChild(tweetOne.lastChild);
          }
        createLovePage();
    }
    else {
        createLovePage();
    }


})
function createLovePage() {
    articleOne.textContent = "Ceci est un test Love. Attention!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate neque velit voluptate ipsam sed corporis quas excepturi nobis quia consectetur nihil aliquid aspernatur placeat harum, enim veritatis nesciunt facere."
    whoIAm.textContent = "J'aime?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    test=false;
}
// function tweetLonger() {

// }
// tweetLonger();