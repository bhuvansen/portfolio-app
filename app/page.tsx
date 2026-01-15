import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import Experience from "@/components/Experience/Experience"
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-black to-gray-700">
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
        </div>
    )
}
