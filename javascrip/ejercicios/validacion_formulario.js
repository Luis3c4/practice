const d =document;
export default function validacion(){
    const $forn=d.querySelector(".contact-form"),
    $inputs =d.querySelectorAll(".contact-form [required] ")
    
    // console.log($inputs);
    //selecciona todos los inputs
    $inputs.forEach(input=> {
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none")
        input.insertAdjacentElement("afterend",$span);
    });
    d.addEventListener("keyup",(e)=>{
        if (e.target.matches(".contact-form [required]")) {
            let $input=e.target,
            pattern= $input.pattern || $input.dataset.pattern;
            

            if (pattern && $input.value !== "") {
                //pattern banderas para validacion
                let regex =new RegExp(pattern);
                // console.log(regex)
                // console.log(pattern)
                //$input.value=devuelve el valor que ingreses a la caja de texto
                return !regex.exec($input.value)
                //$input.name coincide con el id de el span 
                //mostrar el span en caso el patron(pattern) no coincida con el texto 
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active")
            }
            if (pattern) {
                
            }
        }
    })
    d.addEventListener("submit",(e)=>{
        e.preventDefault();
        const $loader=d.querySelector(".contact-form-loader"),
            $response=d.querySelector(".contact-form-response");
            $loader.classList.remove("none");
            setTimeout(()=>{
                console.log("entro al timeout")
                $loader.classList.add("none");
                $response.classList.remove("none");
                $forn.reset();
                setTimeout(() => $response.classList.add("none"), 3000);
            },3000)
    })

    
    
}