import React, { useCallback } from "react";
import { Link , useLocation } from "wouter";
import ListOfgif from "components/ListOfGif";
import UseGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/Search";
import { Helmet } from "react-helmet";


export default function Home(){
    const [path,pushLocation]= useLocation()
    const {gifs} = UseGifs()
    
    const handleSubmit =useCallback(({keyword}) =>{    
        //ruta a seguir
        pushLocation(`/search/${keyword}`)

    },[pushLocation])
 
//separar el input del formulario para que cuando se modifique algo en el no renderize todo el arbol de elementos
   return(
   <>
    <Helmet>
      <title>HOME</title>
    </Helmet>

        <SearchForm onSubmit={handleSubmit} />
        <h3 className='app-tittle'>ultima busqueda</h3>
    
      <ListOfgif gifs={gifs}></ListOfgif>
         
    <h3 className='app-title'>gifs populares</h3>

        <TrendingSearches/>
 </>
   )
}
