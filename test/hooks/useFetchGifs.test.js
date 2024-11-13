import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

const category = 'One Punch'

describe('Test in hook useFetchGifs', () => {
    test('should return the initial state', () => { 

        const { result } = renderHook( () => useFetchGifs( category ))
        const { gifs, isLoading } = result.current;

        //const { gifs, isLoading } = useFetchGifs();

        expect( gifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('should return gifs array and isLoading as false',async () => { 
        const { result } = renderHook( () => useFetchGifs( category ))

        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        )

        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
})
