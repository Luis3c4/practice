const d= document,
    n=navigator;
export default function getGeolocation(id){
    const $id =d.getElementById(id);

    const success = (position)=>{
        //let coords=position.coords;
        console.log(position);
        // $id.innerHTML=`
        //     <p>Tu posiscion actual es</p>
        //         <ul>
        //             <li>Latitud <b>${coords.latitude}</b></li>
        //             <li>Longitud<b>${coords.longitude}</b></li>
        //             <li>Precision<b>${coords.accuracy}</b></li>
        //         </ul>
        //         <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}
        //         1z" target="_blank" rel="noopener">ver en google maps</a>
        // `
    }

    const options ={
         enableHighAccuracy: true,
         timeout: 5000,
         maximunAge: 0,
    }
    const error=(err)=>{
        
        //$id.innerHTML=`<p><mark>Error${err.code}: ${err.message}</mark></p>`
    }

    n.geolocation.getCurrentPosition(success,error,options)
}