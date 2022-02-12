
import React ,{useState} from 'react';
import './App.css';
import Home from './pages/home'
import ListOfgif from './components/ListOfGif/index';
import {Link , Route} from 'wouter'
import searchResults from './pages/searchResults'
import details from './pages/details'
import staticContext from '../src/context/staticContext'
import {GifsContextProvider} from './context/GifsContext';
                

function App() {
//const [keyword , setkeyword] = useState('coca') 
//<button onClick ={()=>setkeyword('mapache')}>cambiar keyword</button>
  return (
    <staticContext.Provider value={{name:'jose', suscripcion:true}}>
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
        <Route
        component={Home}
        path="/"
        />
        
        <Route
        component= {searchResults}
          path ="/search/:keyword" />  
          
        <Route
          component= {details}
          path ="/gif/:id" />


          <Route
          component={()=><h1>error 404 </h1>}
          path="/404"/>
         </GifsContextProvider>         
      </section>
    </div>
    </staticContext.Provider>
  );
}

export default App;
