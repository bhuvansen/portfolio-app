import { experience } from "@/data/experience"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="my-3 section-header">Experience</h2>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                    {experience.map((data, index) => (
                        <ExperienceCard key={index} companyDetails={data} />
                    ))}
                </div>
            </div>
        </section>
    )
}
