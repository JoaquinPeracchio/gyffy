import { useEffect,useState,useRef } from "react"

export default function NearScreen({distance = '100px', externalRef , once = true}={}){
    const [isNearScreen,setShow]= useState(false)
    const RefEl = useRef()
    useEffect(function(){

        const elemento = externalRef?externalRef.current : RefEl.current
        console.log(elemento);

        const change = (entries , observ)=>{
            const element = entries[0]
            console.log(element.isIntersecting)
            if(element.isIntersecting){
                setShow(true)
              // once && observ.disconnect()
            }else{
                !once && setShow(false)
            }
    
    
        }
            
        const observer =  new IntersectionObserver(change , {
            RootMargin : distance
        })
         console.log(elemento)
        if(elemento){
            observer.observe(elemento)
        }else{
            console.log('ainda nada')
        }
        return ()=> observer && observer.disconnect()
    
    
     })  
        return {isNearScreen,RefEl } 
}
