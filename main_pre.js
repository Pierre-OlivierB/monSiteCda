let tweetOne = document.querySelector("#reserv");
let buttonDesc = document.querySelector("#description");
let buttonLang = document.querySelector("#language");
let buttonMed = document.querySelector("#medium");
let buttonLove = document.querySelector("#i_like");
let test = true;

// creation of 1rst articles
let articleOne = document.createElement("article");
let imageIcon = document.createElement("img");
let contHeadArti = document.createElement("div");
let contFootArti = document.createElement("div");
// creation of 2sd articles
let articleTwo = document.createElement("article");
let imageIconTwo = document.createElement("img");
let contHeadArtiTwo = document.createElement("div");
let contFootArtiTwo = document.createElement("div");
// creation of thirds article
let articleThree = document.createElement("article");
let imageIconThree = document.createElement("img");
let contHeadArtiThree = document.createElement("div");
let contFootArtiThree = document.createElement("div");
// top of 1rst articles
let imgVerifToArt = document.createElement("li");
imgVerifToArt.classList.add("img_verif_top_art");
let timeArtCreation = document.createElement("li");
timeArtCreation.textContent="@Montpellier . 1sept";
// top of 2sd articles
let imgVerifToArtTwo = document.createElement("li");
imgVerifToArtTwo.classList.add("img_verif_top_art");
let timeArtCreationTwo = document.createElement("li");
timeArtCreationTwo.textContent="@Montpellier . 1sept";
// top of 3thd articles
let imgVerifToArtThree = document.createElement("li");
imgVerifToArtThree.classList.add("img_verif_top_art");
let timeArtCreationThree = document.createElement("li");
timeArtCreationThree.textContent="@Montpellier . 1sept";
// top of desciption 1rst articles
let whoIAm = document.createElement("li");
// top of desciption 2sd articles
let whoIAmTwo = document.createElement("li");
// top of desciption 3thrd articles
let whoIAmThree = document.createElement("li");
// bottom of 1rst articles
let imgReTweet=document.createElement("li");
imgReTweet.classList.add("img_retweet_bot_art");
let imgLike=document.createElement("li");
imgLike.classList.add("img_like_bot_art");
let imgShare=document.createElement("li");
imgShare.classList.add("img_share_top_art");
// bottom of 2sd articles
let imgReTweetTwo=document.createElement("li");
imgReTweetTwo.classList.add("img_retweet_bot_art");
let imgLikeTwo=document.createElement("li");
imgLikeTwo.classList.add("img_like_bot_art");
let imgShareTwo=document.createElement("li");
imgShareTwo.classList.add("img_share_top_art");
// bottom of 3thrd articles
let imgReTweetThree=document.createElement("li");
imgReTweetThree.classList.add("img_retweet_bot_art");
let imgLikeThree=document.createElement("li");
imgLikeThree.classList.add("img_like_bot_art");
let imgShareThree=document.createElement("li");
imgShareThree.classList.add("img_share_top_art");


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
    createFirstDesc();
    createSecDesc();
    createThiDesc();
}
// creation 1srt article
function createFirstDesc() {
    articleOne.textContent = "– 2018-2021 : Surveillant d'étude à l'Ecole Perceval (Primaire, Collège, Lycée), Chatou \ngestion de salle d'étude  , suivi des élèves et de leur carnets  , réunion parents  ,participation aux événements de l'école."
    whoIAm.textContent = "Qui je suis?";


    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");
    contFootArti.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    tweetOne.appendChild(contFootArti);
    contFootArti.appendChild(imgReTweet);
    contFootArti.appendChild(imgLike);
    contFootArti.appendChild(imgShare);
    test=false;
}
// creation 2sd article
function createSecDesc() {
    articleTwo.textContent = "– 2016-2018: Assistant d'éducation au Lycée Polyvalent Jeanne d'Arc Rennes et au Lycée Polyvalent Jean Baptiste Poquelin Saint Germain en Laye,suivi des appels  , accompagnement des élèves  , surveillance d'examens."
    whoIAmTwo.textContent = "Qui je suis?";


    imageIconTwo.classList.add("img_ascii_tweet");
    imageIconTwo.setAttribute("src", "../test ascii.png");

    contHeadArtiTwo.classList.add("cont_head_arti");
    articleTwo.classList.add("white_font_art");
    contFootArtiTwo.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArtiTwo);
    contHeadArtiTwo.appendChild(whoIAmTwo);
    contHeadArtiTwo.appendChild(imgVerifToArtTwo);
    contHeadArtiTwo.appendChild(timeArtCreationTwo);
    tweetOne.appendChild(imageIconTwo);
    tweetOne.appendChild(articleTwo);
    tweetOne.appendChild(contFootArtiTwo);
    contFootArtiTwo.appendChild(imgReTweetTwo);
    contFootArtiTwo.appendChild(imgLikeTwo);
    contFootArtiTwo.appendChild(imgShareTwo);
    test=false;
}
// creation 3td article
function createThiDesc() {
    articleThree.textContent = "– Autres postes :Equipier McDonald’s Montpellier et Vannes  & Tuteur de 1ère année à l’Université Montpellier 3  &Surveillant de partiels à l’Ecole Supérieur d’Architecture de Montpellier."
    whoIAmThree.textContent = "Qui je suis?";


    imageIconThree.classList.add("img_ascii_tweet");
    imageIconThree.setAttribute("src", "../test ascii.png");

    contHeadArtiThree.classList.add("cont_head_arti");
    articleThree.classList.add("white_font_art");
    contFootArtiThree.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArtiThree);
    contHeadArtiThree.appendChild(whoIAmThree);
    contHeadArtiThree.appendChild(imgVerifToArtThree);
    contHeadArtiThree.appendChild(timeArtCreationThree);
    tweetOne.appendChild(imageIconThree);
    tweetOne.appendChild(articleThree);
    tweetOne.appendChild(contFootArtiThree);
    contFootArtiThree.appendChild(imgReTweetThree);
    contFootArtiThree.appendChild(imgLikeThree);
    contFootArtiThree.appendChild(imgShareThree);
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
    articleOne.textContent = "– Les Langages: \nHtml ,Css,Js,Json"
    whoIAm.textContent = "Langages";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");
    contFootArti.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    tweetOne.appendChild(contFootArti);
    contFootArti.appendChild(imgReTweet);
    contFootArti.appendChild(imgLike);
    contFootArti.appendChild(imgShare);
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
    articleOne.textContent = "–Septembre 2021 à Juin 2022 : Formation Concepteur Développeur D'Applications (CDA) GRETA  en cours."
    whoIAm.textContent = "Médias?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");
    contFootArti.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    tweetOne.appendChild(contFootArti);
    contFootArti.appendChild(imgReTweet);
    contFootArti.appendChild(imgLike);
    contFootArti.appendChild(imgShare);
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
    articleOne.textContent = "Dans mes temps libre j'aime écrire (roman, jeux de rôle en tant que Maître de Jeu), pratique du jeux vidéo (stratégie, aventure) et lire l'actualité (technologie, science, langages)."
    whoIAm.textContent = "J'aime?";

    imageIcon.classList.add("img_ascii_tweet");
    imageIcon.setAttribute("src", "../test ascii.png");

    contHeadArti.classList.add("cont_head_arti");
    articleOne.classList.add("white_font_art");
    contFootArti.classList.add("cont_foot_arti")


    tweetOne.appendChild(contHeadArti);
    contHeadArti.appendChild(whoIAm);
    contHeadArti.appendChild(imgVerifToArt);
    contHeadArti.appendChild(timeArtCreation);
    tweetOne.appendChild(imageIcon);
    tweetOne.appendChild(articleOne);
    tweetOne.appendChild(contFootArti);
    contFootArti.appendChild(imgReTweet);
    contFootArti.appendChild(imgLike);
    contFootArti.appendChild(imgShare);
    test=false;
}
// function tweetLonger() {

// }
// tweetLonger();