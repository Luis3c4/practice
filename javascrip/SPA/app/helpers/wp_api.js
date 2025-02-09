

const NAME="Malvestida",
 DOMAIN=`https://${NAME}.com`,
 SITE= `${DOMAIN}/wp-json`,
 API=`${SITE}/wp/v2`,
 PER_PAGE=6,
 POSTS=`${API}/posts?_embed&per_page=${PER_PAGE}`,
 POST=`${API}/posts`,
 SEARCH=`${API}/search?_embed&per_page=${PER_PAGE}&search=`;
 

let page=1;

 export default {
        NAME,
        DOMAIN,
        SITE,
        API,
        PER_PAGE,
        page,
        POSTS,
        POST,
        SEARCH
 }