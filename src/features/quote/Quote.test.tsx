import { fireEvent, waitFor, screen } from "@testing-library/react";
import { render } from "../../test-utils"
import Cita from "./Cita";
//import { screen } from "@testing-library/react";
//import { getByText } from "@testing-library/react";
import { setupServer } from "msw/node";
import { citaPorNombreDeAutor, citaAleatoria, mocksAPICitas } from "./mocksAPICitas";


describe('Componente Cita', ()=>{

    //const testCita = () => render(<Cita/>);
    const { getByText, queryByPlaceholderText, queryByText, findByText } = screen;
    const server = setupServer(...mocksAPICitas);
    
    beforeAll(() => server.listen());
    beforeEach(() => render(<Cita />));
    afterAll(() => server.close);
    afterEach(() => server.resetHandlers);
     
    it("Aparece el contenedor de cita con todos sus elementos", () => {
        expect(getByText("No se encontro ninguna cita")).toBeInTheDocument()
        expect(queryByPlaceholderText("Ingresa el nombre del autor")).toBeInTheDocument()
        expect(getByText(/obtener cita aleatoria/i, { selector: "button"}) ).toBeInTheDocument()
        expect(getByText(/borrar/i)).toBeInTheDocument()
    })

    
    it("Dando click en botón obtener cita aleatoria con el input vacío", async () => {
        const inputAutor = queryByPlaceholderText("Ingresa el nombre del autor")
        fireEvent.change(inputAutor , { target: {value: ""} } )
        const botonObtenerCitaAleatoria = getByText("Obtener cita aleatoria", { selector: "button"});
        fireEvent.click(botonObtenerCitaAleatoria);
        await waitFor( ()=> expect(getByText("Inflammable means flammable? What a country!")).toBeInTheDocument()  )
        await waitFor( ()=> expect(getByText("Dr. Nick")).toBeInTheDocument()  )
    })

    it("Click en obtener cita aleatoria con un autor definido", async () => {
        const botonObtenerCitaAleatoria = getByText("Obtener cita aleatoria", { selector: "button"});
        const inputAutor = queryByPlaceholderText("Ingresa el nombre del autor")
        fireEvent.change(inputAutor , { target: {value: ""} } )
        fireEvent.change(inputAutor , { target: {value: "Bart"} } )
        fireEvent.click(botonObtenerCitaAleatoria);
        await waitFor(()=>expect(getByText("Nothing you say can upset us. We're the MTV generation.")).toBeInTheDocument())
        await waitFor(()=> expect(getByText("Bart Simpson")).toBeInTheDocument())
    })

    it("Click en botón Borrar", async () => {
        const botonBoorar = getByText(/borrar/i, { selector: "button"});
        const inputAutor = queryByPlaceholderText("Ingresa el nombre del autor")
        fireEvent.click(botonBoorar);
        await waitFor(()=>expect(inputAutor.value).toBe(""))
        await waitFor(()=> expect(getByText("No se encontro ninguna cita")).toBeInTheDocument())
    })
    
})