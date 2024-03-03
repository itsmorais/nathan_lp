
import SelectMui from "../SelectMui/SelectMui"
import { Container } from "./style"
export default function Faq() {

    return (
        <Container>
            <h1 id="Perguntas">Perguntas Frequentes</h1>


            <SelectMui
                question={" Sou uma pessoa muito ocupada. Será que  consigo seguir o plano?"}
                answer={"Com certeza. A ideia é integrar ajustar as estratégias traçadas para que caibam na rotina e fazer com que a adesão ao plano se torne mais fácil."}
            />
            <SelectMui
                question={"Vou precisar comprar muitos manipulados ou suplementos?"}
                answer={"Não! A maioria dos manipulados e suplementos que passam por aí não tem comprovação científica. Ainda que juntos, possamos achar justo adotar uns que realmente possuem eficácia, o foco sempre será no âmbito nutricional."}
            />
            <SelectMui
                question={"O que significa ambiente interno e externo?"}
                answer={"Ambiente externo se refere a todo estímulo externo ao organismo. Ele pode ser desde objetos a eventos sociais e sensações de outras pessoas. \n Já o ambiente interno é relacionado às condições dentro do corpo de um indivíduo, incluindo níveis hormonais, sensações físicas, emoções e pensamentos."}
            />

            <SelectMui
                question={"O atendimento é só para esportistas?"}
                answer={"Não, o atendimento abrange uma ampla variedade de perfis, desde quem busca hábitos saudáveis até atletas de alto nível. \n Ainda que trabalhe com preparação de atletas, a prática da nutrição esportiva e comportamental são adaptados às necessidades individuais, não se limitando, portanto, a este público."}
            />

            <SelectMui
                question={"Consulta online dá resultados?"}
                answer={"Alguns podem achar que a consulta online significa um distanciamento entre o profissional x paciente. Mas na prática, quando se escolhe um profissional competente, não é assim.\nA praticidade da consulta remota não compromete a qualidade da consulta e nem de todo suporte oferecido no acompanhamento.  Além disso, ela facilita o contato constante, tornando rápido fazer ajustes precisos sempre que necessário."}
            />

            <SelectMui
                question={"É feita avaliação física?"}
                answer={"Embora a avaliação física online tenha suas limitações, isso não impacta na elaboração do plano alimentar.\nNo ambiente online, a avaliação física inclui questionários detalhados, registros alimentares, fotos de corpo inteiro, vídeos, medidas corporais simples e análise de exames. \nContudo, vale ressaltar uma coisa: na grande maioria das vezes, a harmonia corporal e o espelho são melhores parâmetros do que o peso e o percentual de gordura corporal."}
            />

            <SelectMui
                question={"Qual forma de pagamento?"}
                answer="Pix ou parcelamento através de bancos que oferecem o serviço, como o Picpay e o Nubank."
            />
        </Container>
    )
}