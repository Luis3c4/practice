import api from "../helpers/wp_api.js";
import { PostCard } from "./postCards.js";
import {ajax} from "../helpers/ajax.js";
import { PostOne } from "./post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./Form.js";
export  function Router(){

    document.getElementById("post").innerHTML=null

    let post= document.getElementById("post");
    let {hash}=location;
    if (!hash || hash === "#/" ) {
        document.getElementById("post").innerHTML=`<h2>¡Bienvenidos a la página!</h2>`;
        ajax({  
            url:api.POSTS,
            cbSuccess:(posts)=>{
                console.log(posts)
                let html="";
                posts.forEach(post => html += PostCard(post));
                document.getElementById("post").innerHTML=html;
                document.querySelector(".loader").style.display="none";
            }
        });
    }else if(hash.includes("#/search")){
        let query=localStorage.getItem("wpSearch");
        if(!query) return false;
        ajax({  
            url:`${api.SEARCH}${query}`,
            cbSuccess:(search)=>{
                console.log(search)
                let html="";
                if(search.length===0){
                    html=`<p>😅 No existen resultados de búsqueda para <mark>${query}</mark></p>`;
                }else{
                    search.forEach(post => html += SearchCard(post));
                }
                document.getElementById("post").innerHTML=html;
                document.querySelector(".loader").style.display="none";
            }
        });
        console.log(`${api.SEARCH}${query}`);
    }else if(hash==="#/contacto"){
        post.appendChild(ContactForm());

    }else{
        document.getElementById("post").innerHTML=`<h2>¡404 No encontrado!</h2>`;
        console.log(`${api.POST}?slug=${hash.slice(2)}`);
        ajax({  
            url:`${api.POST}?slug=${hash.slice(2)}`,
            cbSuccess:(post)=>{
                console.log(post)
                document.getElementById("post").innerHTML=PostOne(post[0]);
                document.querySelector(".loader").style.display="none";
            }
        });
    }
}