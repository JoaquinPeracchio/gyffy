import React from "react"
import './Gif.css'
import { Link } from "wouter"


function Gif ({id,title,url}){
    return(
        <div className='Gif'>
            <Link to ={`/gif/${id}`} className ='Gif-link'>
            <h4>{title} </h4>
            <img  alt = {title} src = {url}/>
            </Link>
        </div>
    )
     
}
export default React.memo(Gif,()=>{
    return Gif
});

