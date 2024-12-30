
import { Loader } from "./components/loader.js";
import { Header } from "./components/headers.js";
import { Post } from "./components/Posts.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infiniteScroll.js";
const $div=document.querySelector(".root");
export function App (){
    const $root = document.querySelector(".root");

    $root.innerHTML=null;
    $root.appendChild(Header());
    $root.appendChild(Post())
    $root.appendChild(Loader());
    InfiniteScroll();
    Router();
}