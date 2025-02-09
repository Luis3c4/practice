
// const cadena=window.prompt("ingrese la cadena")
// const contar=(cadena)=>{
//     console.log(cadena.length)  

// }
// contar(cadena)

    /* 2) Programa una función que te devuelva el texto recortado según el número de 
    caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
//  function ejer2(texto, caracter){
//     if (texto.lenght > caracter) {
//         let x =texto.substring(0,caracter);
//         console.log(x)
//     }else {
//         console.log(texto);
//     }
    
//  }
//  ejer2("hola",-1)
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
    //  function ejer3 (texto, separador){
    //     var resultado=texto.split(separador);
    //     console.log(resultado);
    //  }
    //  ejer3("hola que tal"," ")

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
// function ejer4(texto, numero){
//     let x = texto.repeat(numero)
//     console.log(x)
// }
// ejer4(" hola mundo",3)
    /* 5) Programa una función que invierta las palabras de una cadena de texto,
     pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

    //  function ejer4(texto){
    //     const con=texto.split("")
    //     const recon = con.reverse();
    //     const strcon= recon.join("");
    //      console.log(strcon)
    //  }
    //  ejer4("hola mundo")

/* 6) Programa una función para contar el número de veces que se repite una 
palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
devolverá 2 */
// function ejer6(texto, palabra){
//     var pal= texto.split(" ")
    
//     var contador=0;
//     for (const x in pal) {
//         if(pal[x]===palabra){
//             contador++;
//         }     
//     }
//     console.log(contador);
// }
// ejer6("hola mundo hola","hola")
/* 7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
devolverá true */
// while(i!==0){}
// const polindromo =(palabra="")=>{
//     if(!palabra) return console.log("no ingresaste una palabra o frase")
//     palabra=palabra.toLowerCase();
//     let alreves=palabra.split("").reverse().join("");

//     return (palabra===alreves)
//         ? console.log("si es ")
//         : console.log("no es")
// }
// const pal="hola que tal";
// const inverso=pal.split(" ").reverse().join(" ");
// console.log(inverso)

    /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
    pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
    // const ejer8= (texto="", patron="")=>{
    //     (!texto)
    //     ?console.log("no ingresaste texto")
    //     :(!patron)
    //         ?console.log("no ingresaste patron")
    //         :console.log(texto.replace(new RegExp(patron,"ig"), ""))
    // }
    // function pr(text=""){
    //     console.log(text);  
    //      (text!=undefined)
    //      ?console.log("probando")
    //      :console.log("2peur");
    //      (!text)
    //      ?console.log("probando")
    //      :console.log("2peur")      
    // }
    // ejer8("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")

    // const paragraph = "xyz 1, xyz2, xyz3, xyz4 y xyz5";

    // console.log(paragraph.replace("xyz", ''));
    
//     function p (numero){
//         let divisible = false;
//         for (let i = 2; i < numero; i++) {
//             if((numero%i)===0){
                
//                 divisible=true;
//                 break
//             }
//         }
//         return(divisible)
//         ?console.log("no primo")
//         :console.log("si primo");
//     }
//    function dos (numero){
//         for (let i = 1; i <= numero; i++){
//             var var1=0;
//             let num=numero%i;
//             if (num===0) {
//                 console.log(`entro una vez en la pos ${i}`);
//                 var1++;
//             }
//         }
//         console.log(var1)
//    }

//     dos(6)
    // let vari=false
    // if(true){
    //     console.log("true")
    // }else{
    //     console.log("false")
    // }
    const parimpar=(numero=undefined)=>{
        return ((numero%2)===0)
        ?console.info("par")
        :console.info("inpar")
    }
    parimpar(14)
    const validarnombre=(nombre="")=>{

        let expR = /^[A-Za-zs]+$/g.test(nombre);
        return(expR)
        ? console.info("valido")
        : console.info(`no valido ${expR}`);
    }
    validarnombre("Juan");
   
    const contar=(cadena="")=>{
        let vocales =0,
            consonantes=0;
            for(let letra of cadena){
                if (/[AEIOUaeiou]/.test(letra)) {
                    vocales++;
                }else{
                    consonantes++;
                }
            }
            return console.info({
                cadena,
                vocales,
                consonantes,
            })
                
            
    }
    contar("Hola");

    const cuadrado = (arr= undefined)=>{
        for(let num of arr){
            if(typeof num !== "number")return console.error("no es numero");
        }
        const newArr= arr.map( (num)=>
            num * 2
        )
        console.log(newArr);
    }
    cuadrado([1,2,3])
    const separar=(arr= undefined)=>{
        for (let num of arr) {
            if(typeof num!=="number")return console.error(`el valor  ${num} no es num`)
        }
        return console.info({
            pares: arr.filter(num => num % 2 === 0),
            impar: arr.filter(num => num % 2 === 1)
        })
    }
    separar([2,4,"k",7])
    const ordenar=(arr=undefined)=>{
        return console.info({
            asc: arr.map(el => el).sort(),
            desc: arr.map(el=> el).sort().reverse()
        });
    }
    ordenar([7,3,2,9,6,7])
    const duplicados= (arr=undefined)=>{
        // return console.info({
        //     sinDupli: arr.filter((value,index,self)=>self.indexOf(value)===index)
        // });
        return console.info({
            sindupli: [... new Set(arr)]
        })
    }
    duplicados([1,"j",1])

    const promedio=(arr=undefined)=>{
        return console.info(
            arr.reduce((total,num,index,arreglo)=>{
                total+=num;
                if(index === arr.lenght-1){
                    return `El promedio de ${arr.join("+")}es ${total/arr.lenght}`;
                }else{
                    return total;
                }
            })
        )
    }

    //ULTIMO EJERRR
    class Pelicula{
        constructor({id,titulo,director,estreno,pais,genero,calificacion}){
            this.id=id;
            this.titulo=titulo;
            this.director=director;
            this.estreno=estreno;
            this.pais=pais;
            this.genero=genero;
            this.calificacion=calificacion;

            this.validarIMDB(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarEstreno(estreno);
            this.validarGenero(genero);
        }

        static get generos(){
            return ["accion","aventura","romance"]
        }
        static generoAceptados(){
            return console.log(`los generon aceptados ${Pelicula.generos.join(",")}`);
        }
        validarArreglo(propiedad,valor){
            if (!valor) return console.warn(`${propiedad} "${valor}"esta vacio`);
            
            if(!(valor instanceof Array)) return console.error("no es arreglo");

            for(let cadena of valor){
                if(typeof cadena !=="string") return console.error("no es cadena de texto");

            }
            return true 
        }
        validarCadena(propiedad,valor){
            if (!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);

            if (typeof valor!== "string")return console.error(`${propiedad}"${valor}" no es texto`)

            return true;
        }
        validarNumero(propiedad,valor){
            if (!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);

            if (typeof valor !=="number") return console.error(`${propiedad} "${valor}" ingresado, no es un numero`)

            return true;
        }

        validarLongitud(propiedad,valor,longitud){
            if(valor.lenght > longitud)return console.error(`${propiedad}"${valor}" exede el numero de caracteres (${longitud})`);
            return true;
        }
        
        validarIMDB(id){
            if (this.validarCadena("IMDB id", id)) 
                if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                    return console.error(`IMDB"${id}" no es valido,9 carac 2 letras 7 num`)
        }
        validarTitulo(titulo){
            if (this.validarCadena("titulo", titulo)) 
            this.validarLongitud("titulo",titulo,100);
        }
        validarDirector(director){
            if (this.validarCadena("Director", director)) 
            this.validarLongitud("Director",director,50);
        }
        validarEstreno(estreno){
            if (this.validarNumero("año de entreno", estreno)) 
                if (!(/^([0-9]{4})$/.test(estreno)))
                    return console.error(`año estreno"${id}" no es valido,4 num`)
        }
        
        validarPais(pais){
            this.validarArreglo("Pais",pais);
        }
        validarGenero(generos){
            if(this.validarArreglo("Generos",generos)){
                for(let genero of generos){
                    if(!Pelicula.generos.includes(genero)){
                        console.error(`genero incorrecto "${generos.join(",")}"`)
                        Pelicula.generoAceptados();
                    }
                }
            }
        }
    }

    const peli= new Pelicula({
        id:"tt1234567",
        titulo:"asdwqe",
        director:"rei",
        estreno:2020,
        pais:["colombia"],
        genero:["limonada"]
    })
    // callback
    // function cuadradoCallBack(value,callback) {
    //     setTimeout(()=>{
    //         callback(value, value*value);
    //     },0 | Math.random()*100);
    // }
    // callback(0,(value,result)=>{
    //     console.log("iniciar Callback");
    //     console.log(`Callback ${value}, ${result}`);
    //     callback(1,(value,result)=>{
    //         console.log("iniciar Callback");
    //         console.log(`Callback ${value}, ${result}`);
    //         callback(2,(value,result)=>{
    //             console.log("iniciar Callback");
    //             console.log(`Callback ${value}, ${result}`);
    //         })
    //     })
    // })
    
    //promesas
    function cuadradoPromesa(value){
        if (typeof value !=="number") {
            return Promise.reject(`error el valor ${value} no es numero`)
        }
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({
                    value,
                    result: value*value
                });
            },0 | Math.random()*100);
        });
    }

    //promesa

    // cuadradoPromesa(0)
    // .then(resultado=>{
    //     console.log("inicio Promesa")
    //     console.log(`Promise: ${resultado.value}, ${resultado.result}`);
    //     return cuadradoPromesa(1);
    // })
    // .then()

    async function funcionAsincrona(){
        try{
            console.log("inicio Async Function");
            const resultado = await cuadradoPromesa(0);
            console.log(`async await: ${resultado.value}, ${resultado.result}`);
             resultado = await cuadradoPromesa(1);
            console.log(`async await: ${resultado2.value}, ${resultado2.result}`);
        }catch(error){
            console.log(error);
        }
    }
    // nuevo metodo Symbol
    
    // const NOMBRE=Symbol();
    // const persona={
    //     [NOMBRE]:"Luis"
    // }
    // console.log(persona);

    // persona.NOMBRE="luis Enrique";
    // console.log(persona);

    // persona.NOMBRE="jonatan"
    // console.log(persona);//llama al objeto muestra todo
    // console.log(persona.NOMBRE);//llama a luis enrique
    // console.log(persona[NOMBRE]);// llama a luis 
                                                       
    // sett
    const set= new Set([1,2,3,3])
    set.size;
    const set2=new Set();
    set2.add(1);
    set2.add(2);

    set2.forEach(item => console.log(item));
    let arr =Array.from(set);
    console.log(arr)
    set.delete(1)
    console.log(set.has(2))
    set2.clear();

    let mapa = new Map();
    mapa.set("nombre","Jon")
    mapa.set("apellido","acos")
    mapa.set("edad",35)

    console.log(mapa.size)
    console.log(mapa.has("nombre"))
    console.log(mapa.get("nombre"))
    mapa.set("nombre","luis")
    mapa.delete("apellido")
    for(let[key,value] of mapa){
        console.log(`Llave ${key}, valor ${value}`)
    }

    // WEAKSET

    // const ws = new WeakSet();

    // let valor1 ={"valor1":1};
    // let valor2 ={"valor2":2};
    // let valor3 ={"valor3":3};

    // ws.add(valor1);
    // ws.add(valor2);
    // //ws.add(valor3);
    // ws.add(valor1);
    // // has : busca ese valor en el array 
    // console.log(ws.has(valor1));
    // console.log(ws.has(valor3));
    // ws.delete(valor2);
    // //imprime en un interteavlo bucle
    // setInterval(()=> console.log(ws),1000);
    // setTimeout(()=>{
    //     valor1=null;
    //     valor2=null;
    //     valor3=null;
    // },2000)

    // WEAKMAP: arreglos
    const wrm= new WeakMap();
    let llave1={};
    let llave2={};
    let llave3={};
    wrm.set(llave1,1)
    wrm.set(llave2,2)
    console.log(wrm),
    console.log(wrm.has(llave1));

    console.log(wrm.get(llave2));
    wrm.delete(llave2);

    //ITERABLES Y ITERATORS
    const iterable = [1,2,3,4];
    //Acceemor al iterador del iterable en este caso un array 
    const iterador = iterable[Symbol.iterator]();

    console.log(iterable);
    console.log(iterador);
    //muestra lso valores
    console.log(iterador.next());
    let next= iterador.next();

    while(!next.done){
        console.log(next.value);
        next = iterador.next();
    }
// // GENERATORS
//     function* generador(){
//         yield "HOLA";
//         console.log("hola consola");
//         yield "hola2";
//         console.log("seguimos con el codigo");
//         yield "hola3";
        
//     }
//     const generador = generador(); 
//     for (const y of iter) {
//         console.log(y);
//     }
//     const ar = [...iter()];
//     console.log(ar);

//     function cuadrado2(valor){
//         setTimeout(() => {
//             return console.log({
//                 valor,
//                 result: valor*valor
//             })
//         },Math.random()* 1000);
//     }
//     function* generador2(){
//         console.log("inicia generador")
//         yield cuadrado2(1);
//         yield cuadrado2(2);
//         yield cuadrado2(3);
//         console.log("termina generador")
//     }
//     let gen = generador2;
//     for (const y of gen) {
//         console.log(y);
//     }
//     // PROXY
//     const persona2={
//         nombre:"",
//         apellido:"",
//         edad:0
//     }
//     const manejador={
//         set(obj,prop,value,receiver){
//             //te da las llaver del objeto 
//             if(Object.keys(obj).indexOf(prop)===-1){
//                 return console.error(`la propiedad ${prop} no existe`);
//             }
//             //asignar valor
//             obj[prop]=value;
//         }
//     }

//     const jota = new Proxy(persona2,manejador)
//         jota.nombre="jhon";
//         jota.apellido="mrd";
//         jota.edad=35;
//         console.log(jota);
    //propiedades dinamicas
    // let aleatorio = Math.round(Math.random()*100+5)
    // const objUsuario={
    //     [`id_${aleatorio}`]:"valor aleatorio"
    // };
    // const usuario=["jon","ana","migel"];

    // usuario.forEach((usuario,index)=>objUsuario[`id${index}`]=usuario)
    // console.log(objUsuario);
    //call apply bind para el obejto this
    this.lugar ="contexto globar";
    function saludar(saludo,aQuien) {
        console.log(`${saludo}${aQuien} desde ${this.lugar}`);

    }
    saludar();

    const obj = {
        lugar:"contexto objeto"
    }
    saludar.call(obj,"Hola","JHON");
    saludar.apply(obj,["Adios","jhon"]);

    const persona ={
        nombre:"jhon",
        saludar:function(){
            console.log(`Hola ${this.nombre}`);
        }
    }

        persona.saludar();
    const otraPersona={
        //enlaza
        saludar:persona.saludar.bind(persona)
    }    
    otraPersona.saludar()