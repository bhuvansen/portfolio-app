import Navbar from "@/components/Navbar"
import Skills from "@/components/Skills/Skills"
import Projects from "@/components/Projects/Projects"
import Experience from "@/components/Experience/Experience"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-black to-gray-700">
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
}
