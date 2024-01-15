import Header from "@/components/header"
import Hero from "@/components/hero"
import Divider from "@/components/divider"
import Whatsapp from "@/components/WhatsappIcon"
import Blog_Post from "@/components/blog_post"
import Service_section from "@/components/service_section"
import Head from "next/head"
export default function home() {
    return (
        <>
            <Head>
                <title>Nathan Lorena</title>
                <meta name="description" content="Por Nathan Lorena" />
                <meta name="viewport" content="width=device-width, initial-sacle=1" />
            </Head>
            <Header />
            <Hero />
            <Divider />
            <Blog_Post />
            <Divider />
            <Service_section />
            <Divider />
            <Whatsapp />
        </>
    )
}



