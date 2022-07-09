import { fireEvent, waitFor } from "@testing-library/react";
import { render, screen } from "../../test-utils"
import Cita from "./Cita";
//import { screen } from "@testing-library/react";
//import { getByText } from "@testing-library/react";
import { setupServer } from "msw/node";

describe('Componente Cita', ()=>{

    //const testCita = () => render(<Cita/>);
    const { getByText } = screen;
    
    beforeEach(()=>{
        render(<Cita/>)
        //const { getByText } = screen;
    })
     
    it("Aparece el texto de no se encuentra ninguna cita", () => {
        //const { getByText } = screen;
        //render(<Cita/>)
        //const textoInicial = getByText("No se encontro ninguna cita")
        expect(getByText("No se encontro ninguna cita")).toBeInTheDocument()
    })

    it("Encuentra el input de ingresar el nombre del autor", () => {
        render(<Cita/>)
        const inputNombre = screen.queryByPlaceholderText("Ingresa el nombre del autor")
        expect(inputNombre).toBeInTheDocument()
    })


})