export function PostCard(props){
    let {title, date, _embedded,slug,id} = props;

    let dataFormat=new Date(date).toLocaleDateString();

    return `
        <article class="post-card">
            <img src="${_embedded["wp:featuredmedia"][0].source_url}" alt="${props.title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dataFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
            </p>
        </article>
    `
}