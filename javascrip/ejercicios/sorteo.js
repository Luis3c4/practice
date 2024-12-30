const d = document;
export default function draw(btn,selector){
    const para=d.querySelector("#winner-btn");
    
    const getWinner =(selector)=>{
        const $players=d.querySelectorAll(selector),
            ramdon=Math.floor(Math.random()*$players.length),
            winner=$players[ramdon]; 
            
            return `<p>el ganador es ${winner.textContent}</p>`;
    }

    d.addEventListener("click",(e)=>{

        if (e.target.matches(btn)) {
            
            let result=getWinner(selector);
            para.insertAdjacentHTML("beforebegin",result)
           
        }
    })

}