import React from "react";
import { useState } from "react";

function SearchForm({onSubmit}){

    const [keyword,setkeyword]=useState('')

    const handleSubmit = evt =>{
        evt.preventDefault()

        onSubmit({keyword})
    }
    const handleChange = evt =>{
        setkeyword(evt.target.value)
    }
    return(
    <form onSubmit={handleSubmit}>
        <input placeholder='search a gif here' onChange={handleChange} type='text' value={keyword}/>
    </form>
    )
}
export default React.memo(SearchForm)