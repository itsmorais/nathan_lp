import Header from "@/components/header"
import Hero from "@/components/hero"
import Divider from "@/components/divider"
import Whatsapp from "@/components/WhatsappIcon"
import Blog_Post from "@/components/blog_post"
import Service_section from "@/components/service_section"
import Head from "next/head"
import About from "@/components/about"
import MetodoNathan from "@/components/metodoNathan"
import Exames from "@/components/exames"
import Faq from "@/components/FAQ"
import Testimonials from "@/components/testimonials"
export default function home() {
    return (
        <>
            <Head>
                <title>Nathan Lorena website</title>
                <meta name="description" content="Por Nathan Lorena" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Hero />
            <Divider />
            <Blog_Post />
            <Divider />
            <Service_section />
            <Divider />
            <About />
            <Divider />
            <MetodoNathan />
            <Divider />
            <Exames />
            <Divider />
            <Faq />
            <Divider />
            <Testimonials />
            <Divider />
            <Whatsapp />
        </>
    )
}



