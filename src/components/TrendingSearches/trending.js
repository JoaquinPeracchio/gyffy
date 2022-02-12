import  React ,{ useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTems";
import Category from "../Category";


export default function TrendingSearches (){
    const [trend,setTrend]= useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrend)
    },[])
    console.log(trend)
    return <Category arr = {trend}/>
}