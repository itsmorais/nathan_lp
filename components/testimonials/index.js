import { Container, Avatar } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CTA_button_Square from "../CTAButtonSquare";
import { useEffect, useState } from "react";


export default function Testimonials({ testimonialsData }) {
    const [slidesPerView, setsSidesPerView] = useState(1);
    const [mobileSlider,setMobileSlider] = useState(false)
    useEffect(() => {
        if (window.innerWidth && window.innerWidth > 900) {
            setsSidesPerView(2)
            setMobileSlider(true)
        }
    }, [slidesPerView]);



    return (
        <Container id="Depoimentos">
            <h2> <span>Você está prestes a se juntar a uma comunidade</span> de pessoas que já experimentaram
                <span> resultados reais.</span>
            </h2>

            <Swiper spaceBetween={50}
                
                speed={1000}
                slidesPerView={slidesPerView}
                centeredSlides={false}
                scrollbar={{ draggable: true }}
                autoplay={{
                    disableOnInteraction: true,
                    waitForTransition: true,
                    delay: 4000,
                }}
                navigation={mobileSlider}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Avatar imageurl={testimonial.photoPath}>
                            <div className="avatar">
                                <div><div></div></div>
                                <p>{testimonial.userName}</p>
                            </div>
                        </Avatar>
                        <p className="testimonial">{testimonial.testimonial}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h3 id="relatos">Esses e muitos mais relatos você pode acompanhar no meu instagram profissional:</h3>

            <Link href={"https://www.instagram.com/nathanlorena/"} target="_blank">
                <div className="instagram">
                    <svg id="instaIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.3698C16.1234 12.2021 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.1901 8.22768 13.4227 8.09402 12.592C7.96035 11.7614 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79355 10.2009 8.40605C10.9477 8.01856 11.7977 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 6.5H17.51" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>@Nathanlorena</p>
                </div>
            </Link>
            <CTA_button_Square text={"Fazer parte"} />
        </Container>
    )
}