import {API_KEY , API_URL} from'./settings'


export default function getGif ({keyword = 'homer' , limit =5 , page = 0} = {} ){
    const urlGif = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${page*limit}0&rating=g&lang=es`
    return fetch(urlGif)
    .then(res => res.json())
      .then(response => {
        const {data} = response
        if(Array.isArray(data)){
        const gif = data.map(image => {
            const {images,id, title} = image
            const {url} = images.downsized_medium
            return {url, id, title}
        })
        return gif
      }
        
      })
    
}

//para hacer paginacion en el url remplazamos por el parametro page el cual inicializamos en 0 , lo multiplico por el limit para acceder a mas gifs
