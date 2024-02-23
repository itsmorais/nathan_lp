import { Container, Avatar } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Testimonials() {


    return (
        <Container>
            <h2> Você está prestes a se juntar a uma comunidade de pessoas que já experimentaram
                <span> resultados reais.</span>
            </h2>


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

                    <Avatar imageurl={"caique.jpg"}>
                        <div className="avatar">

                            <div><div></div></div>
                            <p> - Caique Garcia</p>
                        </div>
                    </Avatar>
                    <p className="testimonial">
                        Só registrar mais uma evolução aqui:
                        Ando comendo bastante vegetais, coisa que nunca gostei.
                        Ainda não consigo falar que GOSTO de brócolis,
                        beterraba, abóbora etc.
                        Mas já consigo comer sem ter nenhum tipo de ânsia ou coisa do tipo,
                        consigo comer tranquilo!
                    </p>
                </SwiperSlide>



                <SwiperSlide >

                    <Avatar imageurl={"raphael.jpg"}>
                        <div className="avatar">

                            <div><div></div></div>
                            <p> - Raphael Puglia</p>
                        </div>
                    </Avatar>
                    <p className="testimonial">
                        Melhorei para caramba!
                        Dei uma diminuída na barriga, ta bem melhor e era o que me incomodava!,
                        isso porque estou comendo muito! kkk, e ajudou muito na academia,
                        todos os exercicios eu aumentei o peso consideravelmente, tô com muito
                        mais disposição, sempre seguindo certinho o que você me passou!
                    </p>
                </SwiperSlide>

            </Swiper>
            <p>Esses e muitos mais relatos você pode acompanhar no meu instagram profissional:</p>

        </Container>
    )
}