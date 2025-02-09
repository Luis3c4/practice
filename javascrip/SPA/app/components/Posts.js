export function Post(){
    const $posts = document.createElement("section");
    $posts.id="post";
    if (!location.hash.includes("#/search")) {
        $posts.classList.add("grid-fluid");
        
    }
    return $posts;
}