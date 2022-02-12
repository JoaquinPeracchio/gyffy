import { API_KEY } from "./settings"
import { API_URL } from "./settings"


const fromApiResponse = apiResponse =>{
    const {data = []} =apiResponse
    console.log(data)
    return data 

}








export default function getTrendingTerms () {
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  
    return fetch(apiUrl).then(res=>res.json())
        .then(fromApiResponse)
}   
