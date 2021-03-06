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

//chargement de la premi??re page au chargement de la page
window.onload=createDescPage();
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

function createFirst() {
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
}
function createSecond() {
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
}
function createThird() {
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
}
// creation 1srt article
function createFirstDesc() {
    articleOne.textContent = "De 2018 ?? 2021 j'??tais Surveillant de l'??tude ?? l'Ecole Perceval (Primaire, Coll??ge, Lyc??e) dans la ville de Chatou.";
    articleOne.textContent+=" Le coeur de mes actions tournait autour de la gestion de salle d'??tude, le suivi des ??l??ves et de leur carnets, les r??unions avec les parents et biensur la participation aux ??v??nements de l'??cole."; 
    whoIAm.textContent = "Qui je suis?";
    createFirst();
    test=false;
}
// creation 2sd article
function createSecDesc() {
    articleTwo.textContent = "De 2016 ?? 2018 j'??tais Assistant d'??ducation au Lyc??e Polyvalent Jeanne d'Arc de Rennes et au Lyc??e Polyvalent Jean Baptiste Poquelin de Saint Germain en Laye l'ann??e d'apr??s."
    articleTwo.textContent += " Mes actions tournaient autour du suivi des appels, de l'accompagnement des ??l??ves et de la surveillance d'examens."
    whoIAmTwo.textContent = "Qui je suis?";
    createSecond();
    test=false;
}
// creation 3td article
function createThiDesc() {
    articleThree.textContent = "P??le-m??le j'ai aussi ??t?? Equipier McDonald???s de Montpellier et de Vannes, ainsi que Tuteur de 1??re ann??e ?? l???Universit?? de Montpellier 3  et Surveillant de partiels ?? l???Ecole Sup??rieur d???Architecture de Montpellier ?? d'autres occasions."
    whoIAmThree.textContent = "Qui je suis?";
    createThird();
    test=false;
}

// langages utilis??s part
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
    createFirstLang();
    createSecLang();
    createThiLang();
    test=false;
}
// 1rst article
function createFirstLang() {
    articleOne.textContent = "Les Langages que je pratique sont: Html, Css, JS, Java!"
    whoIAm.textContent = "Langages";
    createFirst();
   
}
// 2sd article 
function createSecLang() {
    articleTwo.textContent = "Les Frameworks que j'utilise sont: Bootstrap, Materialize, jQuery, Three.js"
    whoIAmTwo.textContent = "Langages";
    createSecond();
}
// 3thrd article
function createThiLang() {
    articleThree.textContent = "Il nous reste les Logiciels que j'utilise: Visual Studio Code, draw.io, looping-mcd, FileZilla, WordPress, Fetch, Vite.js, GitHub, Eclypse."
    whoIAmThree.textContent = "Langages";
    createThird();
}
// M??dias part
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
    createFirstMed();
    createSecMed();
    createThiMed();
    test=false;
}
function createFirstMed() {
    articleOne.textContent = "Voici ma derni??re formation elle a d??but?? en Septembre 2021 et elle continue jusqu'en Juin 2022. Elle am??ne au titre professionnel de Concepteur D??veloppeur D'Applications (CDA) et cela gr??ce au GRETA Montpellier."
    whoIAmTwo.textContent = "M??dias?";
    createFirst();
}
function createSecMed() {
    articleTwo.textContent = "Ma derni??re formation remonte en Ao??t 2012. C'??tait une Licence de Psychologie ?? Montpellier dans l'Universit?? Montpellier 3 (UM3)."
    whoIAmTwo.textContent = "M??dias?";
    createSecond();
}
function createThiMed() {
    articleThree.textContent = "Ma premi??re formation s'est finie en Octobre 2009 par le Baccalaur??at S??rie Scientifique."
    whoIAmThree.textContent = "M??dias?";
    createThird();
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
    createFirstLove();
    createSecLove();
    createThiLove();

    test=false;
}
function createFirstLove() {
    articleOne.textContent = "Dans mes temps libre j'aime ??crire autant des romans, des jeux de r??le et je les organise en tant que Ma??tre de Jeu. Je pratique les jeux vid??o autant ceux de strat??gie que d'aventure."
    whoIAm.textContent = "J'aime?";
    createFirst();
}
function createSecLove() {
    articleTwo.textContent = "Dans le cadre de mes ??tudes j'ai appris l'Anglais et l'Espagnol. De plus je m'int??resse ?? l'humain en g??n??ral et je suis toujours curieux des derni??res recherches en psychologie."
    whoIAmTwo.textContent = "J'aime?";
    createSecond();
}
function createThiLove() {
    articleThree.textContent = "Je continue de lire l'actualit?? sur de nombreux sujet comme la technologie, science et maintenant le langage. Gr??ce ?? ma nouvelle formation, il me pla??t de jouer avec certain codes."
    whoIAmThree.textContent = "J'aime?";
    createThird();
}
// function tweetLonger() {

// }
// tweetLonger();