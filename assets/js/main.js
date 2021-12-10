//menibar(dinamicko ispisivanje)
const pages=["Home","About","Programs","Results","Testimonial","Author"];
const links=["#Home","#About","#Programs","#Results","#Testimonial","#Author"];

var navBar=document.querySelector("#nav ul");//4.korak

for(let i=0;i<pages.length;i++)
{
    var li=document.createElement("li");
    li.setAttribute("class","nav-item")

    var a=document.createElement("a");
    a.setAttribute("href",links[i]);

    var aContent=document.createTextNode(pages[i]);

    a.appendChild(aContent);
    li.appendChild(a);
    navBar.appendChild(li);
}
//hamburger menu(dogadjaj) i dinamicko kreiraj diva za hamburger
const navId=document.querySelector("#navigation-row");

let hamburgerDiv=` <div class="col-2 hamburger">
                     <span class="bar"></span>
                     <span class="bar"></span>
                     <span class="bar"></span>
                </div>`;

navId.innerHTML+=hamburgerDiv;

const hamburger=document.querySelector(".hamburger")
const menuList=document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
})

//dodavanj boje navigation bloku na skrol
const header = document.querySelector("#navigation");

window.addEventListener("scroll", function() {

    if (window.scrollY>= 50) {
    header.classList.add("header-color");
    }
    else {
    header.classList.remove("header-color");
    }
});
//slider header
var headerCover=['assets/img/slika1.jpg','assets/img/slika2.jpg','assets/img/slika3.jpg'];
var headerDiv=document.getElementById("slider");

function change(){
for (var i=0; i < headerCover.length; i++) {
(function(parametar) {
setTimeout(function(){
 headerDiv.style.backgroundImage="url('"+ headerCover[parametar] + "')"}
, 3500*parametar);

})(i);
}}
change()
setInterval(function(){10
change()
},3500*headerCover.length)
//about sekcija(dinamicko kreiranje)

var about=document.querySelector("#about");

var aboutImg=["barbell","dumbell","equipment","boxing"];
var cardTitle=["Our workout","Our studio","Our equipment","Our mission"];
var cardText=["Some quick example text to build on the card title and make up the bulk of the card's contentorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.","Some quick example text to build on the card title and make up the bulk of the card's contentorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.","Some quick example text to build on the card title and make up the bulk of the card's contentorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.","Some quick example text to build on the card title and make up the bulk of the card's contentorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",]

for(let i=0;i<aboutImg.length;i++){
  
    //cardDiv
    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-lg-3 col-md-6 col-sm-12");
    cardDiv.style.background="transparent";
 
    //imgDiv
    var imgDiv=document.createElement("div");
    imgDiv.setAttribute("class","img");
    imgDiv.innerHTML = `<img src="assets/img/${aboutImg[i]}.jpg" alt="${aboutImg[i]}">`;

    //carBody
    var cardBody=document.createElement("div");
    cardBody.setAttribute("class","card-body");
    cardBody.innerHTML=`<h4 class="font-medium text-uppercase text-center mt-3 mb-3 fw-bold">${cardTitle[i]}</h4>`;
    cardBody.innerHTML+=`<p class="text-center mb-5">${cardText[i]}</p>`;
    cardBody.style.color="#434343";

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardBody);

    about.appendChild(cardDiv);
}

//table gym rules(dinamicko kreiranje)

const gymDiv=document.querySelector("#gymsRules");
const gymRules=new Array("Every training is a new challenge","You become good at many things, not just one","No distractions, You are in the focus","The only thing that counts is your training, your goals and your progress","Sve je u skladu sa sopstvenim mogućnostima u zajednici koja takođe živi tim stilom","Na tabli je Vaš trening dana '(WOD)' - odnosno Vaš cilj","Every training is a new challenge"
)

let divExpect=`<h4 class="text-center fw-bold">What to Expect in Our Gym?</h4>
            <table class='table mb-5' id='gymTable'>`;

for(let i=0;i<gymRules.length;i++){
    divExpect+=`<tr>
                <td class='text-center'>${gymRules[i]}</td>
            </tr>`
}
divExpect+="</table>";

gymDiv.innerHTML=divExpect;

//efekat zebre

var odd=$("#gymTable tr:nth-child(odd)").css({
    backgroundColor: "#DFE1E1"
});

//regEx

let reNameSurname=/^[A-Z][a-z]{2,20}$/
var reEmail=/^[\w\.\-]+\@[\a-z0-9-]+\.+[a-z]{2,3}$/;

//galerija(jquery plugin)

lightGallery(document.querySelector(".gallery"))









