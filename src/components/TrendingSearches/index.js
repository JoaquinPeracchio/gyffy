import React ,{Suspense}from "react";
import NearScreen from "../../hooks/useNearScreen"
//import TrendingSearches from "./trending";

// import dinamico , es asinc y devuelve una promesa . lo utilizamos para que se carguen los archivos solo en determinados
//momentos , en este caso al hacer scrooll hacia abajo
// como es una promesa el componente que queremos renderizar debe ir envuelto en un suspense
const TrendingSearches = React.lazy(
    ()=>import('../TrendingSearches/trending')
)

//function lazy is one update to the  call fetch over the trendings only the scroll run until 100 px

export default function LazyTrend (){
    
    const {isNearScreen, RefEl}= NearScreen({distance : '500px'})
    

// cuando pasamos un componente con signos mayor y menor pasa a ser un elemento 
    return <div ref={RefEl}>
          <Suspense fallback={'cargando'}>
          { isNearScreen ? <TrendingSearches/> : null} 
          </Suspense> 
    </div>


   
}

/*
creamos un hook , a ese hook por parametro de funcion le pasamos lo que queremos que devuelva 
 quiero que devuelva el div que contiene las actualizaciones 
 como ese div no tiene id le pasamos como parametro de funcion elementRef = useref()
 como ya no tengo mas las var del use state por que esta esta dentro de la funcion 
 ahora tengo que crear una nueva variable y pasarle const newstate = functioncreada()
 
 */