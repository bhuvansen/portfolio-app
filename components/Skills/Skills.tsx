import { skills } from "@/data/skills"
import "./Skills.css"


export default function Skills() {
  return (
    <section id="skills" className="projects-section py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="my-3 section-header">Skills</h2>

        <div className="nt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                rounded-2xl 
                border border-white/10 
                bg-white/5 
                px-6 py-5
                text-center
                text-white/90
                font-medium
                tracking-wide
                hover:border-white/20
                hover:bg-white/10
                transition
              "
            >
              {skill.message}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
