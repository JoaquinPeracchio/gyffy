import { API_KEY } from "./settings";
import { API_URL } from "./settings";

const singleApiGif = apiresponse =>{
    const {data}=apiresponse
    const {images,id, title} = data
    console.log(images)
    const {url} = images.downsized_medium

    return {url, id, title}
}


export default function getSinglegif({id}){
   return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(response=> response.json())
            .then(singleApiGif)
}