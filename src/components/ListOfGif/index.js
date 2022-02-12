import React from "react"
import Gif from "../Gif/gif"
import '../Gif/Gif.css'


export default function ListOfgif({gifs}){
  
     return <div className='ListOfGifs'>
       {
         gifs.map(({id,title,url})=>
         <Gif 
           id = {id}
           key = {id}
           title = {title} 
           url = {url}  
         />         
        )
       }
     </div>     
}

