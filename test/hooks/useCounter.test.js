import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, decrease, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrease).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));


    });

    test('Debe de generar el valor de 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrease, increment, reset } = result.current;
        expect(counter).toBe(100);
     })

})