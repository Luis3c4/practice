
(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr=document.getElementById("xhr"),
    $fragment=document.createDocumentFragment();
    
    xhr.addEventListener("readystatechange",(e)=>{
        
        if(xhr.readyState!== 4)return
        console.log(xhr);
        if(xhr.status>=200 && xhr.status<300){
            let json= JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach(el => {
                const $li=document.createElement("li")
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                // $li.textContent="contenido agregado"
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }else{
            console.log("error");
            let message=xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML= `Error ${xhr.status} ${message}`
        }
    })
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.send();
})();

(()=>{
    const $fecth =document.getElementById("fetch"),
    $fragment=document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        //console.log(res);
        return res.ok ?res.json() :Promise.reject(res)
    })
    .then((json)=>{
        //console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}---${el.email}---${el.phone}`;
            $fragment.appendChild($li);
        });
        $fecth.appendChild($fragment);
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally()
})();

(()=>{
    async function getData() {
        const $fecthAsync =document.getElementById("fetch-async"),
        $fragment=document.createDocumentFragment();
        try {
            let res= await fetch("https://jsonplaceholder.typicode.com/users"),
                json= await res.json();
            //console.log(res,json);
            //este if va aqui porque a la hora de generar error lo hace por el foreach y no por el catch
            if (!res.ok){
                console.log(res.status);
                throw {status:res.status, statusText:res.statusText };
            } 

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);
            });
            $fecthAsync.appendChild($fragment);
        } catch (err) {
            console.log(`el eroor es: ${err.status }` );
            let message=err.statusText || "Ocurrio un error";
            $fecthAsync.innerHTML= `Error ${err.status} ${message}`;
        }
    }
    getData();
})();

(()=>{
    const $axios =document.getElementById("axios"),
    $fragment=document.createDocumentFragment();
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        res.data.forEach((el)=>{
            const $li = document.createElement("li");
            $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
            $fragment.appendChild($li);
        })
        $axios.appendChild($fragment);
        console.log(res);
    })
    .catch((err)=>{
        console.log("estas en el catch ", err.response);
    })
})();

(()=>{
    const $axiosAsync =document.getElementById("axios-async"),
    $fragment=document.createDocumentFragment();
    async function getData() {
        try {
           let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            json=await res.data;
            
            json.forEach(el => {
                const $li=document.createElement("li");
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
            console.log(res,json);
        } catch (err) {
            console.log("estas en el catch ", err.response);

        }
    }
    getData();
})();