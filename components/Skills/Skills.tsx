import { skills } from "@/data/skills"
import "./Skills.css"
import ProgressBar from "../ProgressBar/ProgressBar"

export default function Skills() {
    return (
        <section id="skills" className="projects-section py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="my-3 section-header">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 place-items-center">
                    {skills.map((item, index) => {
                        return (
                            <div className="w-[180px] h-[180px] flex items-center mt-5" key={index}>
                                <ProgressBar
                                    id={index}
                                    imgLogo={item.logo}
                                    percentage={item.percentage}
                                    message={item.message}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
