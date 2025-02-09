import { PostCard } from "../components/postCards.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";
export function InfiniteScroll(){
    let query=localStorage.getItem("wpSearch"),
     apiURL,
     component;

        window.addEventListener("scroll",(e)=>{
            let {scrollTop,clientHeight,scrollHeight}=document.documentElement;
            let {hash}=window.location;
            if (scrollTop+clientHeight>=scrollHeight) {
                api.page++;
                if (!hash || hash === "#/" ) {
                    apiURL=`${api.POSTS}&page=${api.page}`;
                    component=PostCard;
                }else if(hash.includes("#/search")){
                    apiURL=`${api.SEARCH}${query}&page=${api.page}`;
                    component=SearchCard;
                }else{
                    return false
                }
                ajax({
                    url:apiURL,
                    cbSuccess:(posts)=>{
                        let html="";
                        posts.forEach(post => html += component(post));
                        document.getElementById("post").insertAdjacentHTML("beforeend",html);
                    }
                })
            }
        })
    }