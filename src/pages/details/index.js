import React , {useContext} from "react";
import Gif from "../../components/Gif/gif";
import gifContext from '../../hooks/gifContext'
import TakeSinglegif from "hooks/singleGif";
import { Redirect } from "wouter";
import GetMetittle from "hooks/title";

export default function Detail({params}){   

    console.log(params.id)
    const {gif,error} = TakeSinglegif({id:params.id})
    const title = gif ? gif.title : ''
    GetMetittle({title})
    if(error)return <Redirect to='/404'/>
    if(!gif){
        return null;
    } 

   
    return <Gif {...gif} />
}