const d=document,
    n=navigator,
    //informacion del dispositivo del usuario
    ua=n.userAgent;

export default function userDiviceInfo(id){
    const $id= d.getElementById(id),
    isMobile={},
    isDesktop={},
    isBrowser={
        //match devuelve un array de todo lo que contiene
        chrome: ()=> ua.match(/chrome/i),
        firefox: ()=> ua.match(/firefox/i),
        brave: ()=> ua.match(/brave/i),
        any: function(){
            return(
                this.chrome() ||
                this.firefox() ||
                this.brave()
            );
        }
    };
    // console.log(ua);
    // console.log(isBrowser.brave());
    // console.log(isBrowser.brave());
    $id.innerHTML=`
        <ul>
            <li>User agent: <b>${ua}</b></li>
            <li>navegador: <b>${
                isBrowser.any()
            }</b></li>
        </u>`
    if (isBrowser.chrome()) {
        //window.location.href="https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93";
    }
}