import { Title } from "./title.js";
import { Menu } from "./menu.js";
import { SearchForm } from "./searchForm.js";

export function Header(){
    const $Header=document.createElement("header");
    $Header.classList.add("header");
    $Header.appendChild(Title());
    $Header.appendChild(Menu());
    $Header.appendChild(SearchForm());
    return $Header;
}