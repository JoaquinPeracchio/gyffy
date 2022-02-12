import React from "react";
import { Link } from "wouter";
export default function Category({arr}){
    return  <ul>
    {arr.map((popgif)=>(
            <li key={popgif}>
            <Link to={`search/${popgif}`}>gif de {popgif}</Link>
            
            </li>
        ))}
    </ul>
}