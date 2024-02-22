
import SelectMui from "../SelectMui/SelectMui"





export default function Faq() {

    return (
        <>
            <h1>Perguntas Frequentes</h1>


            <SelectMui
                question={" Sou uma pessoa muito ocupada. Será que  consigo seguir o plano?"}
                answer={"Com certeza. A ideia é integrar ajustar as estratégias traçadas para que caibam na rotina e fazer com que a adesão ao plano se torne mais fácil."}
            />
            <SelectMui
                question={"Vou precisar comprar muitos manipulados ou suplementos?"}
            />
            <SelectMui
                question={"O que significa ambiente interno e externo?"}
            />

            <SelectMui
                question={"O atendimento é só para esportistas?"}
            />

            <SelectMui
                question={"Consulta online dá resultados?"}
            />

            <SelectMui
                question={"É feita avaliação física?"}
            />

            <SelectMui
                question={"Qual forma de pagamento?"}
            />
        </>
    )
}