const d=document;
export default function scrollSpy(){
    const $sections= d.querySelectorAll("section[data-scroll-spy]")

    const cb=(entries)=>{
       
        entries.forEach(entry => {
            //console.log("entries",entry);
            
            //seleciona el id de la secciones 
            const $id = entry.target.getAttribute("id");
            //console.log($id)
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${$id}"]`).classList.add("active");
                //console.log(vari);
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${$id}"]`).classList.remove("active")
            }
        });        
    }
    const observer = new IntersectionObserver(cb,{
        //root
        //rootmargin
        threshold:[0.5,0.75],
    });
    
    $sections.forEach((el)=>observer.observe(el));
}