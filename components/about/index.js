import { Container, ImageNathan } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function About() {

    return (
        <Container id="Sobre">
            <h1>Quem sou eu?</h1>

            <section id="desktopSection">

        <div id="desktopTextSection">
            <p>Me chamo Nathan Lorena, sou nutricionista e fisiculturista.</p>

            <p>Apaixonado pela nutrição há mais de 10 anos, me especializei nesta área com o objetivo de ajudar as pessoas a alcançarem seus objetivos sem precisar
                a recorrer a dietas malucas ou métodos mirabolantes que são vendidos na internet. </p>

            <p>Trabalhando com a Nutrição esportiva e comportamental, prezo por uma nutrição humanizada e individualizada. Olho para a saúde dos meus
                pacientes como um todo, desde a parte externa à interna. </p>
            <div id="desktop">
                <p>Acredito em uma nutrição baseada na vida real, conciliando o planejamento alimentar à sua rotina. </p>

                <p>Analisando as dificuldades dos meus pacientes durante minha trajetória, desenvolvi um método de trabalho próprio. Nele, aplico flexibilidade alimentar,
                    prazer em comer e modulação dos ambientes externo e interno para trazer resultados expressivos. </p>
            </div>
            </div>


            <Swiper spaceBetween={50}
                speed={1000}
                slidesPerView={1}
                centeredSlides={true}
                scrollbar={{ draggable: true }}
                autoplay={{
                    disableOnInteraction: false,
                    waitForTransition: true,
                    delay: 4000,

                }}

                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide >
                    <ImageNathan imageurl="no-bg.png">
                        <div><div>
                        </div></div>
                    </ImageNathan>
                </SwiperSlide>




                <SwiperSlide>
                    <ImageNathan imageurl="fisio.jpeg">
                        <div><div>
                        </div></div>
                    </ImageNathan>
                </SwiperSlide>


                <SwiperSlide>
                    <ImageNathan imageurl="fisio1.jpeg">
                        <div><div>
                        </div></div>
                    </ImageNathan>
                </SwiperSlide>


                <SwiperSlide>
                    <ImageNathan imageurl="fisio2.jpeg">
                        <div><div>
                        </div></div>
                    </ImageNathan>
                </SwiperSlide>



            </Swiper>
            </section>
            <div id="mobile">
                <p>Acredito em uma nutrição baseada na vida real, conciliando o planejamento alimentar à sua rotina. </p>

                <p>Analisando as dificuldades dos meus pacientes durante minha trajetória, desenvolvi um método de trabalho próprio. Nele, aplico flexibilidade alimentar,
                    prazer em comer e modulação dos ambientes externo e interno para trazer resultados expressivos. </p>

            </div>

        </Container>
    )
}