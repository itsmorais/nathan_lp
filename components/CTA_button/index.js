
import { Container } from "./style"
export default function CTA_button({ text, image }) {

    return (

        <Container>

            {image}
            <a>{text}</a>


        </Container>



    )
}