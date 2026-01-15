export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold text-white">{"<Bhuvan/>"}</h1>

                <ul className="hidden md:flex gap-8 text-sm text-white">
                    <li>
                        <a href="#skills" className="hover:text-white">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-white">
                            Experience
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
