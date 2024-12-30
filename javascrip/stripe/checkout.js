import STRIPE_KEYS from "./skeys.js";
const stripe= Stripe(STRIPE_KEYS.public)
const d=document,
 $productos=d.getElementById("productos"),
 $template=d.getElementById("productos-template"),
 $fragment=d.createDocumentFragment()
const fetchOptions={
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    }
}
let productos, prices;

const moneyFormat= num =>`$${num.slice(0,-2)}.${num.slice(-2)}`
 Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
 .then(responses=>{
    return Promise.all(responses.map(res=>res.json()))
 })
 .then((json)=>{
    console.log(json)
     productos=json[0].data
     prices=json[1].data

     prices.forEach(el => {
        let producData=productos.filter(prod=>prod.id===el.product)
        console.log(producData);
        
        $template.content.querySelector(".producto").setAttribute("data-price",el.id);
        $template.content.querySelector("img").src=producData[0].images[0];
        $template.content.querySelector("img").alt=producData[0].name;
        $template.content.querySelector("figcaption").innerHTML=`
        ${producData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `;
        let $clone=d.importNode($template.content, true);
        $fragment.appendChild($clone);
        
     })
     $productos.appendChild($fragment);
 })
 .catch((err)=>{
    console.log(err)
    let message=err.statusText || "ocurrio un error al conectarse con la API";
    $productos.innerHTML=`<p>Error ${message}</p>`
 })
 d.addEventListener("click",e=>{
   if(e.target.matches(".producto *")){
      let price = e.target.parentElement.getAttribute("data-price")
      stripe.redirectToCheckout({
         lineItems:[{price, quantity: 1}],
         mode:"payment",
         successUrl:"http://127.0.0.1:5500/javascrip/stripe/stripe-succes.html",
         cancelUrl:"http://127.0.0.1:5500/javascrip/stripe/stripe-cancel.html"
      })
      .then(res=>{
         console.log(res)
         if(res.error){
            $productos.insertAdjacentHTML("afterend",res.error.message)
         }
      })
   }
 })