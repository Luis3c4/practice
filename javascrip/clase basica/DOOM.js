// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.setAttribute("lang","es-MX");
const $linkDom=document.querySelector(".link-dom");

$linkDom.setAttribute("target","_black");
$linkDom.setAttribute("rel","noopener");
$linkDom.setAttribute("href","www.google.com");
console.log($linkDom.hasAttribute("rel"))
$linkDom.removeAttribute("rel");
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(window.getComputedStyle($linkDom));
$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width="50%";
$linkDom.style.textAlign="center";
$linkDom.style.marginLeft="auto";
$linkDom.style.marginRight="auto";
$linkDom.style.padding="1rem";
$linkDom.style.borderRadius=".5rem";
$linkDom.style.color="red";
console.log($linkDom.style);
console.log(getComputedStyle($linkDom));

// const $html=document.documentElement,
//     $body=document.body;
// let dark=getComputedStyle($html).getPropertyValue("--dark-color");
// let yellow=getComputedStyle($html).getPropertyValue("--yellow-color");

// $body.style.backgroundColor=dark;
// $body.style.color=yellow;
// $html.style.setProperty("--dark-color","pink");
// dark=getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",dark); 

// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);

// $card.classList.add("active");

// $card.classList.toggle("active");

// $card.classList.remove("active");

// $card.classList.replace("rotate-45","rotate-135")

const $whatsDOM= document.getElementById("que-es")
let text=`
    <p>
        probando 
    </p>
    <p>
        probando dos 
    </p>
    <p>
        probando tres
    </p>
`;

$whatsDOM.textContent=text;
$whatsDOM.innerHTML=text;
$whatsDOM.outerHTML=text;
const $cards= document.querySelector(".cards");

console.log($cards.children[2]);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.$cards
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));

const $figure = document.createElement("figure");
const $img = document.createElement("img"),
$figcaption=document.createElement("figcaption"),
$figcaptionText=document.createTextNode("Animals"),
$card = document.querySelector(".cards"),
$figure2=document.createElement("figure");

//$img.setAttribute("src","./img/animals.jpg");
$img.setAttribute("alt","animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img);
//$figcaption.appendChild($figcaption);
$card.appendChild($figure);

$figure2.innerHTML=`
    
    <figcaption>Peaple</figcaption>
    `
    $figure2.classList.add("card");
    $card.appendChild($figure2);

    const estaciones=["Primavera","Verano","Otoñoo","invierno"],
    $ul = document.createElement("ul")

    const meses=[
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ],
    $ul3=document.createElement("ul"),
    $fragment = document.createDocumentFragment()

    meses.forEach(el=>{
        const $li = document.createElement("li");
        $li.textContent=el;
        $fragment.appendChild($li);
    })
    document.write("<h3>mese deñ año</h3>")
    $ul3.appendChild($fragment);
    //TEMPLATE
    const $cardss = document.querySelector("card"),
     $template = document.getElementById("template-card").content,
     $fragmentt=document.createDocumentFragment(),
     cardConted=[
         {
             nombre:"gente",
             imagen:"./img/animals.jpg"
         },
         {
             nombre:"gente",
             imagen:"./img/animals.jpg"
         }
     ];
     cardConted.forEach(el=>{
        $template.querySelector("img").setAttribute("scr",el.imagen);
        $template.querySelector("img").setAttribute("alt",el.nombre);
        $template.querySelector("figcaption").textContent=el.nombre;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone)


     })

    //  const $cardsss = document.querySelector(".cards"),
    //  $newCard = document.createElement("figure");
    //  $cloneCards=$cardsss.cloneNode(true)

    //  $newCard.innerHTML=`
    //      <img src="./img/animals.jpg" alt="animals">
    //      <figcaption>Peaple</figcaption>
    //      `
    //  $newCard.classList.add("card");
    //  $cardsss.insertBefore($newCard,$cardsss.firstElementChild)
    //  $cardsss.removeChild($cardsss.lastElementChild);
     /* 

    -----------------------------------------------------------------------
     
        insertAdjacent...
            .insertAdjacentElement(position, el)
            .insertAdjacentHTML(position, html)
            .insertAdjacentText(position, text)
     
        Posiciones:
            beforebegin(hermano anterior)
            afeterbegin(primer huji)
            beforeend(ultimo hijo)
            afterend(hermano siguiente)
     */
     const $cardsss = document.querySelector(".cards"),
     $newCard = document.createElement("figure");


     let $contenCard=`
         <img src="./img/animals.jpg" alt="animals">
         <figcaption></figcaption>
         `;
     $newCard.classList.add("card");

     
     //$newCard.insertAdjacentHTML("beforeend", $contenCard);
     //$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","textoaqui")
     $cardsss.insertAdjacentElement("beforebegin",$newCard);

     $card.prepend($newCard);//primirhijo
     $card.before($newCard)//anterior del padre
     $card.append($newCard);//ulimohijo
     $card.after($newCard);//ultimo elemento fuera del padre
     //-----------------------------------------------------------
     //EVENTOS
     function saludar(nombre="Desconocido"){
        alert(`hola${nombre}`);

     }
     function holaMundo(){
        console.log("jhon");
     }
     const $eventoSemantico=document.getElementById("evento-semantico"),
     $eventoMultiple=document.getElementById("evento-multiple"),
     $eventoRemover=document.getElementById("evento-remover");

     //$eventoSemantico.onclick=holaMundo//sin parentecis porque debe ejecutarse cuando se hace click
     //solo muestra una funcion
    //  $eventoSemantico.onclick=function(e){
    //     alert("hola mundo manejador de evntos semantico")
    //     console.log(e);
    //     console.log(event);//similar
    //  }

     $eventoMultiple.addEventListener("click", holaMundo);
     $eventoMultiple.addEventListener("click" ,(e)=>{
        alert("hola manejador multiple");
        //mas importante
        console.log(e.type);
        console.log(e.target);
     })
     $eventoMultiple.addEventListener("click",(e)=>{
        alert("hola manejador multiple");
        //mas importante
        console.log(e.type);
        console.log(e.target);
     })
     $eventoMultiple.addEventListener("click",()=>{
        saludar("jhon");
     })

     const removerDobleClick=(e)=>{
        alert(`removiendo el evento ${e.type}`);
        console.log(e);
        $eventoRemover.removeEventListener("dblclick",removerDobleClick);
        $eventoRemover.disabled=true;
     }

     $eventoRemover.addEventListener("dblclick", removerDobleClick)

     const $divEventos = document.querySelectorAll(".eventos-flujo div"),
     $linkEventos = document.querySelector(".eventos-flujo a");

     function flujoEvento(e){
        console.log(`hola ${this.className}, el click lo origino ${e.target.className}`);
        e.stopPropagation();
     }
     $divEventos.forEach(div=>{
        div.addEventListener("click",flujoEvento)
     })

    //  $linkEventos.addEventListener("click",(e)=>{
    //     alert("holo soy yo");
    //     e.preventDefault(); 
    //  })
    //FORMA MAS RAPIDA Y OPTIMA DE USAR EVENTLISTENER
     document.addEventListener("click",(e)=>{
        console.log("click en ", e.target);
        if(e.target.matches(".eventos-flujo a")){
            alert("holo soy yo");
            //evita que se abra el enlase
            e.preventDefault(); 
        }
     })
     //BOM
     window.addEventListener("resize",(e)=>{
        console.clear();
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        console.log(window.outerWidth);
        console.log(window.outerHeight);

     })
     window.addEventListener("scroll",(e)=>{
        console.clear();
        console.log("eveento")
        console.log(window.scrollX);
        console.log(window.scrollY);

     });
     window.addEventListener("load",(e)=>{
        console.clear();
        console.log("cargando");
        console.log(window.screenX);
        console.log(window.screenY);

     });
     document.addEventListener("DOMContentLoaded",(e)=>{
        console.log("EVENTO DOMconetend");
        console.log(window.screenX);
        console.log(window.screenY);
     })
     const $btnAbrir=document.getElementById("abrir-ventana"),
     $btnCerrar=document.getElementById("cerrar-ventana"),
     $btnImprimir=document.getElementById("imprimir-ventana");
     let ventana;

     $btnAbrir.addEventListener("click",(e)=>{
        ventana=window.open("https://jonmircha.com/");
    })
     $btnCerrar.addEventListener("click",(e)=>{
        ventana.close();
    })
     $btnImprimir.addEventListener("click",(e)=>{
        window.print();
     })
     //LOCATION Y NAVIGATOR   
     navigator;
     history;
     location
