import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('GifItem test', () => {
  const title = "The Title"
  const url   = 'https://www.google.com/image'

    test('should match with snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url} />)    
        expect( container ).toMatchSnapshot()    
    })

    test('should show image with url and alt defined', () => {
        render(<GifItem title={ title } url={ url } />)
        const img = screen.getByRole('img')    
        expect( img.alt ).toBe( title )
        expect( img.src ).toBe( url )
    })
   
})
