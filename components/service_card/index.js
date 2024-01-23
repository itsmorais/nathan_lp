
import { Container } from "./style"
export default function Service_card({ title, text = "", icon }) {

    let paragrafos = []

    paragrafos = text.split(".")
    return (



        <Container>
            {icon}

            <div className="textos">
                <h1>{title}</h1>

                {paragrafos.map((texto, index) => (
                    <div key={index}>
                        <p>{texto}</p>
                    </div>
                ))}
            </div>



        </Container>



    )
}