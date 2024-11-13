import { fireEvent, render,screen } from "@testing-library/react"
import ReadCategory from "../../src/components/ReadCategory"

describe('Test on <ReadCategory />', () => {
  test('should change the value of the text', () => {
    render( <ReadCategory readCategory={ ()=> {} } />)    
    const categoryInput = screen.getByRole('textbox')
    fireEvent.change( categoryInput, { target:{ value: 'hi' } } )    
    expect( categoryInput.value ).toBe('hi')
  });

  test('should call onSubmit if input have a valid value', () => {
    const inputValue = 'hello'
    const mockReadCategory = jest.fn()

    render( <ReadCategory readCategory={ mockReadCategory } />)    
    const categoryInput = screen.getByRole('textbox')
    fireEvent.change( categoryInput, { target:{ value: inputValue } } )    
    const form = screen.getByRole('form')
    fireEvent.submit( form )
    
    expect( categoryInput.value).toBe('')
    expect( mockReadCategory ).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onSubmit if input is empty', () => { 
    const mockReadCategory = jest.fn()

    render( <ReadCategory readCategory={ mockReadCategory } />)    
    const form = screen.getByRole('form')
    const categoryInput = screen.getByRole('textbox')
    fireEvent.submit( form )
    
    expect( categoryInput.value).toBe('')
    expect( mockReadCategory ).toHaveBeenCalledTimes(0)
  })
})
