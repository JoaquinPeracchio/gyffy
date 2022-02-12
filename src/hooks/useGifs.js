import {useContext, useState, useEffect } from "react" 
import getGif from "../services/gifs"
import GifContext from '../context/GifsContext'
const INITIAL_PAGE = 0
 export default function UseGifs({keyword}= {keyword:null}){
     const{gifs,setGifs} = useContext(GifContext)
     const [page,setPage] = useState(INITIAL_PAGE)
    

    console.log(keyword)
    const keyInUse = keyword || localStorage.getItem('keysave') || 'random'
    useEffect(function() {
        
        getGif({keyword : keyInUse}).then(gifs=>{
        setGifs(gifs)
        localStorage.setItem('keysave',keyword)
        })
        
    },[keyword , setGifs,keyInUse])

    useEffect(function(){
        if (page == INITIAL_PAGE)return 


        getGif({keyword : keyInUse ,page})
        .then(nextGifs =>{
            setGifs(prevGifs=>prevGifs.concat(nextGifs))//si a setgifs le pasamos una funcion esta devuelve como parametro el estado anterior es decir el valor que
                                                //tenia cuando se uso previamente (los gifs) entonces a esos anteriores podemos concatenarles los nuevos 
        })

    },[keyInUse,page,setGifs])//son dependencias que necesita por eje tanto keyinuse como page se encuentran fuera de la funcion y como no se la pasamos por parametro
                        //pero la necesitamos la metemos ahi como una dependencia necesaria para ejecutar la funcion correctamente

    return {gifs , setPage}
    
}   

/*const pageinit = 0
///////////////////////////////////////
hookgetgif
const urlGIF = ......keyword......limit.......page*limit.....
//////////////////////////////////////
const pageinit = 0 
const [page,setpage]= useState(pageinit)
useEffect (function{
    getgif({keyword : keyinuse , page})
    .then(newpage)
        setgif(valact => valact.concat(newpage))
},[keyinuse,setgif,page])

return{gif,setpage}

const handleevt = function(){
    setpage(val => val +1 )
}

onclick(handleevt)

es simple es facil , solo hay que pensar en que la pagina debe ser multiplicada por el limite para aumentar los gifs
quien trae los gifs ? use gifs como se actualizan setgif , como se su valor actual? con una funcion interna de este \
creamos un usestate de las paginas para asi actualizarlas y cuando esto pase al value de setgifs le concatenamos 
los nuevos , los cuales se van a generar cuando la pagina cambie de su valor
entonces cuando el usuario de click en cambiar de pagina el setpage'actualizador' va a ejecutar su funcion interna que en este caso es 0 y le sumamos mas uno
eso va a actualizar el get gif y va a concatenar los nuevos gif al valor de ese momento de setgif




*/



 /* explicacion del use context 
 nosotros creamos un contexto para que se ejecute en las rutas de la app en este caso son details , home , search results 
 creamos un contexto donde internamente tiene un a funcion que contiene un use state ([]) con dos variables dentro de un array ,
 que son actualizador y valor , luego decimos que ese contexto o funcion retorno un context.provider y que el valor de este sean las variables dentro del array
 todo esto se creo dentro de una funcion que recibe un parametro el cual despues pondremos dentro de las llaves del context.provider de este modo
 
 export default function giftrends({childere}){
     [valor , actualizador] = useState([])


    }return <contex.provider  value = {valor,actualizador}>
                {
                    {childere}
                }
            </context.provider>


 */
