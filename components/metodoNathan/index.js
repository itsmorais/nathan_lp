import CTAButtonSquare from "../CTAButtonSquare"
import MethodCard from "../method_card"
import { Container } from "./style"
export default function MetodoNathan() {
    return (
        <Container id="Método" className="anchor-link">
            <h1>Método Nathan Lorena</h1>

            <span>100% Individualizado!</span>

            <p>A consulta e o acompanhamento são concentrados em explorar como os fatores externos e internos podem
                influenciar as escolhas por determinados alimentos. Ou seja, todas as esferas que permeiam os padrões alimentares.</p>

            <p>Com foco nos seus objetivos, elaboro uma prescrição dietética com alimentos acessíveis e facilmente
                incorporáveis à sua rotina. No entanto, vou além de simplesmente prescrever um plano alimentar.</p>

            <p>O objetivo dessa abordagem é conseguir oferecer orientações 100% individualizadas para que a
                adoção de comportamentos que favoreçam a adesão ao planejamento a longo prazo consigam ser tomados.</p>

            <h2>Forma de atendimento</h2>

            <MethodCard >
                <p>Todo o acompanhamento é 100% online.</p>
                <p>As consultas são feitas através de chamada
                    de vídeo e possuem duração média de 1h30. Cada planejamento alimentar é enviado em até 24h.</p>
            </MethodCard>

            <h2 id="tiposAtendimento">Temos dois tipos de atendimentos</h2>
            <MethodCard><p>Consulta única/avulsa</p></MethodCard>
            <MethodCard><p>Pacote de 3 consultas que serão marcadas conforme a necessidade de cada pessoa,
                e não necessariamente a cada 15 dias ou mês.</p></MethodCard>

            <p>O contato pós-consulta é feito pelo WhatsApp. Fico disponível durante todo o período contratado para responder
                dúvidas que possam surgir, dar feedbacks e fazer possíveis reajustes.</p>

                <CTAButtonSquare text={"AGENDAR AGORA"}/>
        </Container>
    )
}