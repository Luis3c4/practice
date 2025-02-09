const d=document;
export default function responsiveTester(form){
    const $forn=d.getElementById(form);
    let tester;
    
    d.addEventListener("submit",(e)=>{
        if(e.target===($forn)){
            console.log("estas presionando aqui")
            e.preventDefault();
            //para poder crear una pestaña emergente 
            tester=window.open($forn.direccion.value,"tester",`innerWidth= ${$forn.ancho.value}, innerHeight=${$forn.alto.value}`);
        }
    })
    d.addEventListener("click",e=>{
        if(e.target===$forn.cerrar && tester){
            tester.close();
            tester=null;
        }
    })
}