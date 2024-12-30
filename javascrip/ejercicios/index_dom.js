import scrolTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDiviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_Webcam.js";
import searchFilters from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speachReader from "./narrador.js";
import responsiveTester from "./presponsive.js";
import{digitalClock,alarm} from "./reloj.js"
import responsiveMedia from "./responsive.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { shortcuts, moveBall } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import validacion from "./validacion_formulario.js";
import smartVideo from "./video_inteñigente.js";
const d = document;
d.addEventListener("DOMContentLoaded",  e =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("asset/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","May 23, 2024 03:23:19","feliz cumple");
   scrolTopButton(".scroll-top-btn"); 
   responsiveMedia("youtube","(min-width: 1024px)",'<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93" target="_blank">ver video</a>','<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=wCROuscaYDjarSmq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
   responsiveMedia("gmaps","(min-width: 1024px)","contenido mobile","contenido escritorio");
    responsiveTester("Responsive-tester");
    userDiviceInfo("user-divice");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    validacion();
});
darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speachReader(); 

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})
