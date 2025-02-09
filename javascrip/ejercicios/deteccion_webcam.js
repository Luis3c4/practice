const d=document,
    n=navigator;
export default function webCam(id){
    const $video=d.getElementById(id)
   
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video: true, audio: false})
        .then((stream)=>{
            console.log(stream);
            //srcObjej xq agrega un objeto no un enlace
            $video.srcObject= stream;
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`)
            //console.log(`sucedio un error ${err}`)
        })
        
    }
}