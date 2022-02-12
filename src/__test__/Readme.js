//
/*
//////////////////////////////////////////////HOME/INDEX.JS///////////////////////////////////
  /////////Se nos esta creando nuevamente esta funcion en el home cada vez que se renderiza 
  ////////lo podemos ver en React Tools 
  /////// lo solucionamos con un use callback para decir que a noser que cambien las dependencias especificas
  ///////no vuelva a crear la function
  //////////////////////////ANTES///////////////////////////////////////  
  const handleSubmit = ({keyword}) =>{    
        //ruta a seguir
        pushLocation(`/search/${keyword}`)

    }
///////////////////////////AHORA////////////////////////////////////////
      
    const handleSubmit =useCallback( ({keyword}) =>{    
        //ruta a seguir
        pushLocation(`/search/${keyword}`)

    },[pushLocation])//dependencia que si se modifica crea nuevamente la funcion
                        y si no lo hace no la crea nuevamente mejorando la optimizacion

////SE SOLUCIONO///////////////////
/////////////////////////////OTRO PROBLEMA/////////////////////////////
se renderiza por que dice que las propiedades del elemento padre cambian entonces 
si nosotros sabemos que no cambio la propiedad lo que podemos hacer es almacenarlo en
una variable y usar USEMEMO y colocar en dependencia que solo se modifique si cambia 

const element = UseMemo(()=><searchForm onSubmit{handleSubmit}/>,[handleSubmit])
///
///esto puede generar algunos problemas por que estamos guardando en memo un componente donde
lo estamos utilizando, en este caso si lo usamos en la home solo va actuar en la home
haciendo asi que tengamos que crearlo en otro lado para el mismo componente
entonces mejor hacemos el memo del componente con react memo y si lo llamamos de otro lado
va a comparar las props y si estas cambian hace el render. sino no

////////////SOLUCION//////////////////////
usar react memo que es un componente de orden superior al cual le pasamos el componente que queremos que
guarde en memoria y que nos devuelva otro componente
//////////////////////////////////////////
export default React.memo(componente) 
///////////////////////// evitara que se renderize si sus props y las nuevas 
no han cambiado , hace una comparacion
////////////////////////////////////////////////////////////////////////////////////////////
*/