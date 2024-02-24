
import { Container } from "./style"
import Link from "next/link"
export default function CTA_button_Square({ text }) {

    return (

        <Link
        href="https:/wa.me/5512981324203?text=Ol%C3%A1%2C%20visitei%20seu%20site%20e%20tenho%20interesse%20em%20Agendar%20Uma%20Consulta"
        target="_blank">
            <Container>

                <h3>{text}</h3>


            </Container>

        </Link>

    )
}