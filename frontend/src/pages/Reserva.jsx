import { Formulario } from "../components/Formulario";
import { Navbar } from "../components/Navbar";

export function Reserva({token}){

    return(
        <>
            <Navbar/>
            <Formulario token={token}/>
        </>
    )

}