import react, { useContext } from "react";
import GifContext from 'context/GifsContext'

export default function useGifHook(){
    const {gifs} = useContext(GifContext)
    return gifs
}