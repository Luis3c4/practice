const d = document;
const ls=localStorage;
export default function darkTheme(btn,classDark){
    const $themeBtn=d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]")
    //console.log($selectors);
    let sun="☀️";
    let moon="🌙";
    const darkmode=()=>{
        $selectors.forEach((el)=>el.classList.add(classDark))
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark")
    }
    const lightmode=()=>{
        $selectors.forEach((el)=>el.classList.remove(classDark))
        $themeBtn.textContent=moon;
        ls.setItem("theme","light")
    }
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
            if ($themeBtn.textContent===moon) {
                darkmode();
            }else{
                lightmode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded",(e)=>{
        // if (ls.getItem("theme")===null) {
        //     ls.setItem("theme","light")
        // }
        if (ls.getItem("theme")==="light") {
            lightmode();
        }
        if (ls.getItem("theme")==="dark") {
            darkmode();
        }
    })
}