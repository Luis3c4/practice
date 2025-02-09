const d = document;
let x=0,
    y=0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall= $ball.getBoundingClientRect(),
    limitsStage= $stage.getBoundingClientRect();
    
    //console.log(limitsStage, limitsBall);
    
    //console.log(e.key);
    switch(e.keyCode){
        case 37:
            //left
            e.preventDefault();
            if(limitsBall.left > limitsStage.left)x--;
            break;
        case 38:
            //up
            e.preventDefault();
            if(limitsBall.top > limitsStage.top)y--;
            break;
        case 39:
            //right
            e.preventDefault();
            if(limitsBall.right < limitsStage.right)x++;
            break;
        case 40:
            //down
            e.preventDefault();
            if(limitsBall.bottom < limitsStage.bottom)y++;
            
            break;
        default:
            break;
    }
    $ball.style.transform=`translate(${x*10}px, ${y*10}px)`;
}
export function shortcuts(e){
    // console.log(e.type);//el tipo de metododo 
    // console.log(e.key);//la tecla 
    // console.log(e.keyCode);//el coidgo de tecla 
    // console.log(e.ctrKey);
    // console.log(e.shiftKey);

    //console.log(e);
    
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado")
    }
    if(e.key === "c" && e.ctrlKey){
        confirm("Haz lanzado una confirmacion con el teclado")
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado una alerta con el teclado")
    }
}