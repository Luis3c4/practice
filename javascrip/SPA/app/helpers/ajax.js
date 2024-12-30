export  function ajax(props) {
    let {url, cbSuccess} = props;
     fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res)) // No es necesario usar `new Promise` aquí
        .then(data => cbSuccess(data))
        .catch(err => {
            let message = err.statusText || "Ocurrió un error";
            document.getElementById("post").innerHTML = `
                <div class="error">
                    <p>Error ${err.status}: ${message}</p>
                </div>
            `;
            document.querySelector(".loader").style.display = "none";
            console.error(err);
        });
}