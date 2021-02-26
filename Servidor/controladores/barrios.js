import { Barrios } from '../models/tablas';

export const listarBarrios = () => {
    return Barrios.findAll()
}
/*export const listarBarrios = () =>{
    return [
        "liniers",
        "mataderos",
        "villa luro",
        "monte castro",
        "lugano",
        "versailles"
    ]
}*/