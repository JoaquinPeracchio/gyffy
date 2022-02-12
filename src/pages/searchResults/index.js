import React, {useRef,useEffect,useCallback} from 'react'
import ListOfgif from '../../components/ListOfGif/index'
import UseGifs from '../../hooks/useGifs'
import NearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import GetMetittle from 'hooks/title'



export default function SearchResults({params}){
   const {keyword} = params
   const {gifs , setPage}= UseGifs({keyword})
   const externalRef = useRef()
   
   const {isNearScreen} = NearScreen({externalRef ,once:false})
    const debounceNextpage = useCallback(debounce(
        ()=>setPage(prevPage=>prevPage + 1),500
    ),[])
useEffect(function(){
    console.log(isNearScreen);
    if(isNearScreen)debounceNextpage()
},[debounceNextpage,isNearScreen])
console.log(gifs)
const title = gifs?`${gifs.length}-resultados de-${keyword}`:''
GetMetittle({title})

//USEcallback no rellama a la funcion a noser que las dependencias cambien , por ej , 
// para evitar un loop infinito usamos debounce , que aunque se produzcan muchas llamadas
//este identifica que son todas de un mismo sitio y devuelve solo uno
//pero si usamos un effect que renderiza cuando la depen se modifica ,.. en este caso se ejecuta 
//igual a expensas del debounce .. aca usamo el use callback que memoriza la funcion a expensas del efect y le pongo que 
//solo se actualize cuando se modifica la dependencia , la cual yo indico [dependencia]



    return <>
        {    
            <ListOfgif gifs={gifs}/>
        }
        <div id='visor' ref = {externalRef}></div>
       
    </>
    
}
    