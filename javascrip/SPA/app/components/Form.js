export function ContactForm(){
    const $form=document.createElement("form");
    const $styles=document.getElementById("dynamic-styles");
    $styles.innerHTML=`
        .contact-form {
        --forn-ok-color: green;
        --forn-error-color: red;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }
      .contact-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
      }
      .contact-form textarea {
        resize: none;
      }
      .contact-form legend,
      .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }
      .contact-form input,
      .contact-form textarea {
        font-size: 1.5rem;
        font-family: sans-serif;
      }
      .contact-form input[type="submit"] {
        width: 50%;
        font-weight: bold;
        cursor: pointer;
      }
      .contact-form *::placeholder {
        color: black;
      }
      .contact-form [required]:valid {
        border: thin solid var(--forn-ok-color);
      }
      .contact-form [required]:invalid {
        border: thin solid var(--forn-error-color);
      }
      .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--forn-error-color);
        color: #fff;
        transition: all 800ms ease;
      }
      .contact-form-error.is-active {
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
      }
      .contact-form-loader{
        text-align: center;
      }
      .none {
        display: none;
      }
      @keyframes show-message {
        0% {
          visibility: hidden;
          opacity: 0;
        }
        100% {
          visibility: visible;
          opacity: 1;
        }
      }
    ` 
    $form.classList.add("contact-form");
    $form.innerHTML=`
     <legend>Envianos tus comentarios</legend>
      <!-- <label for="">hola</label> -->
      <input
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        title="solo acepta letras y espacios"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Escribe tu email"
        title="email incorrecto"
        pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Asunto a tratar"
        title="el asunto es requerido"
        required
      />
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        title="Tu comentario no debe exeder de 255 caracteres"
        data-pattern="^.{1,255}$"
        required
      ></textarea>
      <input type="submit" value="enviar" />
      <div class="contact-form-loader none">
        <img src="../assets/hearts.svg" alt="Cargando" />
      </div>
      <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
      </div>`;
    function contacForm() {
        const $forn = d.querySelector(".contact-form"),
          $inputs = d.querySelectorAll(".contact-form [required] ");

        // console.log($inputs);
        //selecciona todos los inputs
        $inputs.forEach((input) => {
          const $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          $span.classList.add("contact-form-error", "none");
          input.insertAdjacentElement("afterend", $span);
        });
        d.addEventListener("keyup", (e) => {
          if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
              pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
              //pattern banderas para validacion
              let regex = new RegExp(pattern);
              // console.log(regex)
              // console.log(pattern)
              //$input.value=devuelve el valor que ingreses a la caja de texto
              return !regex.exec($input.value)
                ? //$input.name coincide con el id de el span
                  //mostrar el span en caso el patron(pattern) no coincida con el texto
                  d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
            
          }
        });
        d.addEventListener("submit", (e) => {
          e.preventDefault();
          const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");
          $loader.classList.remove("none");
          fetch("https://formsubmit.co/ajax/luischoqueacostupa@gmail.com",{
            method:"POST",
            body:new FormData(e.target)
          })
            .then(res=> res.ok?res.json():Promise.reject(res))
            .then(json=>{
              $loader.classList.add("none");
              $response.classList.remove("none")
              $response.innerHTML=`<p>${json.message}</p>`
              $forn.reset();
            })
            .catch(err=>{
              console.log(err)
              let message = err.statusText || "OCURRIO UN ERROR";
              $response.innerHTML=`<p>error ${err.status} ${message}</p>`
            })
            .finally(()=> setTimeout(()=>{
              $response.classList.add("none");
              $response.innerHTML=``;
            },3000))
          // setTimeout(() => {
          //   console.log("entro al timeout");
          //   $loader.classList.add("none");
          //   $response.classList.remove("none");
          //   $forn.reset();
          //   setTimeout(() => $response.classList.add("none"), 3000);
          // }, 3000);
        });
      }
      setTimeout(() => contacForm(), 100);
    return $form;
}