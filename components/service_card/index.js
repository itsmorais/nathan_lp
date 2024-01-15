
import { Container } from "./style"
export default function Service_card({ title, text="", icon }) {

    let paragrafos = []

    paragrafos = text.split(".")
    return (



        <Container>
            {icon}

            <div className="textos">
                <h1>{title}</h1>

                {paragrafos.map((texto) =>(
                    <>
                    <p>{texto}</p>
                    </>
                ))}
            </div>



        </Container>



    )
}