import { fireEvent, render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"


jest.mock("../../src/hooks/useFetchGifs")


describe('Test in <GifGrid />', () => {
    const category = 'One Punch'

    test('should show initial loading', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render( <GifGrid category={category} onRemoveCategory={ ()=> {} } /> )

        expect( screen.getByText('Cargando..')).toBeTruthy()
        expect( screen.getByText( category )).toBeTruthy()
    })

    test('should show items when images are loaded with useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Test1',
                url: 'http://www.google.com/test'
            },
            {
                id: 'ABC2',
                title: 'Test2',
                url: 'http://www.google.com/test2'
            }
        ]

        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        })

        render( <GifGrid category={category} onRemoveCategory={ ()=> {} } /> )
        expect( screen.getByText('Test1')).toBeTruthy
        expect( screen.getByText('Test2')).toBeTruthy
        

    })

    test('should call onRemoveCategory when removed', () => {
        const mockOnRemoveCategory = jest.fn()
        render( <GifGrid category={category} onRemoveCategory={ mockOnRemoveCategory } /> )
        const removeButton = screen.getByRole('button')
        fireEvent.click( removeButton )
        expect( mockOnRemoveCategory ).toHaveBeenCalledWith('One Punch')
        
    })
})
