import  { fireEvent, render,screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

const category = 'One Punch'

describe('Test in <GifExpertApp/>', () => {
    test('should render initial state', () => { 
        render( <GifExpertApp/>)        
        const input = screen.getByRole('textbox')
        expect( screen.getByText('Gif Expert App') )
        expect( input.value ).toBe("")

    })

    test('should show a new category added', () => {

        render( <GifExpertApp/>)
        const form = screen.getByRole('form')
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: category }}  )        
        fireEvent.submit( form )
        expect( screen.getAllByText( category )).toBeTruthy()
    })
    
})
