import Header from "@/components/header"
import Hero from "@/components/hero"
import Divider from "@/components/divider"
import Whatsapp from "@/components/WhatsappIcon"
import Blog_Post from "@/components/blog_post"
export default function home() {
    return (
        <div>
            <Header/>
            <Hero />
            <Divider/>
            <Blog_Post/>
            <Divider/>
            <Whatsapp/>
        </div>
    )
}



