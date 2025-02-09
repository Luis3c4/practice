const d =document,
w=window;
export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    //TRABAJANDO CON MEDIA QUERY
    let breakpoint=w.matchMedia(mq);

    const responsive=(e)=>{
        if (e.matches) {
            d.getElementById(id).innerHTML=desktopContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }
        //console.log(e.matches);
    }
    responsive(breakpoint);
    //HACIENDO QUE EL EVENTO RESPONSIVE FUNCIONE
    breakpoint.addEventListener("change",responsive);
}