import React,{useEffect, useRef} from "react";

export default function GetMetittle({title}){
    const previus = useRef(document.title)

    useEffect(function(){
        const previosTitle = previus.current
        document.title = `${title}  |GIF`
        return ()=>document.title = previosTitle
    },[title])
    
    
}