const d=document,
    w=window;
export default function smartVideo(){
    const $video =d.querySelectorAll("video[data-smart-video]");
    
    const cb=(entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.play();
                d.querySelector(`a[data-scroll-spy][href="#seccion13"]`).classList.add("active");

            }else{
                entry.target.pause();
                d.querySelector(`a[data-scroll-spy][href="#seccion13"]`).classList.remove("active");
            }
            w.addEventListener("visibilitychange",(el)=>d.visibilityState==="visible" ?entry.target.play():entry.target.pause())
        })
    }
        
    const observer= new IntersectionObserver(cb,{ threshold:0.3});
    $video.forEach((el) => observer.observe(el));
}
