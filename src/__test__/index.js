
/*
import React from "react";
import { render ,fireEvent,screen} from "@testing-library/react";
import App from "../App";
///////////////////////////////////////////////////////////////////////
// quiero testear un elemento 
//se encuentra en el home 
test('home',async()=>{
    const {conteiner} = render(<App/>)
    const GifAwait = await waitFor(()=>{
        conteiner.querySelector('Gif-Link')
    })
    expect(GifAwait).toBeVisible()


})
///////////////////////////////////////////////////////////////////////

//quiero buscar un texto dentro app

test('renders without Crashing ',async()=>{
    const {findByText} = render(<App/>)
    const title = await findByText(/ultima busqueda/i)
    expect(title).toBeVisible()

} )
////////////////////////////////////////////////////////////////////////

//quiero testear un formulario

test('form could be used',async()=>{
    render(<App/>)
    const input = await screen.findByRole('textbox')
    fireEvent.change(input,{target : {value : 'Matrix'}})
    //buscar el boton
    const button = await screen.findByRole('button')
    fireEvent.click(button) 
    //buscar el titulo
    const title = await screen.findByText('matrix')
    expect(title).toBeVisible()

   */
   

