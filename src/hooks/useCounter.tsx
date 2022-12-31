import { useState } from "react";


export const useCounter = (inicial: number) => {
    const [value, setValue] = useState<number>(inicial);
    const acumular = (numero: number) => {
    setValue(value + numero);
    }

    return {
        value, acumular
    }
}
