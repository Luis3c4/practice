export default function hamburgerMenu(panelBtn, panel,menuLink){
    const d= document;
    d.addEventListener("click",e=>{
        //target:elemento que causa el evento
        //matches:busca una coinsidencia 
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            //toggle: añade su contenido con el parametro
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            //toggle: añade su contenido con el parametro
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}