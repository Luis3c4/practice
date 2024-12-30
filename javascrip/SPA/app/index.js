import {App} from "./Temp.js";
import api from "./helpers/wp_api.js";
let d=document;
d.addEventListener("DOMContentLoaded",App)
window.addEventListener("hashchange",(e)=>{
    api.page=1;
    App();
})
