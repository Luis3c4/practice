const d = document;
export default function countdown(id,limitDate,finalMessage){
    const $countdown = d .getElementById(id),
    countdownDate= new Date(limitDate).getTime();
    let countdownTempo= setInterval(()=>{
        let now= new Date().getTime(),
        limitTime = countdownDate-now,
        days = Math.floor(limitTime/(86400000)) ,
        hours = Math.floor((limitTime%(86400000))/3600000),
        minutes = Math.floor((limitTime%(3600000))/60000),
        seconds = Math.floor((limitTime%(60000))/1000);

        $countdown.innerHTML=`<h3> faltan ${days} dias
        ${hours} horas
        ${minutes} minutos
        ${seconds} segundos
        </h3>`
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML=`<h3>${finalMessage}</h3>`;
        }
    }, 1000) 

}