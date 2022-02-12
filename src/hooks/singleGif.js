import  { useEffect, useState } from "react";
import React from "react";
import UseGifs from "./useGifs";
import getSinglegif from "services/getSinglegif";
export default function TakeSinglegif({id}){

    const {gifs} = UseGifs()
    
    console.log(gifs)
   const  gifCache= gifs.find(single => single.id === id)
   console.log(gifCache);

   const [gif , setGif]= useState(gifCache)
   const [error,isError]=useState(false)

   useEffect(function(){
       if(!gif){
     getSinglegif({id})
     .then(res=>{
         setGif(res)
         isError(false)
     }).catch(err=>{
         isError(true)
     })
    
    }

   },[gif , id])

    return {gif,error}
}